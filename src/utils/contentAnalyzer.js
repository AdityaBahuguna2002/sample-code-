export const analyzeContent = (content, focusKeyword="artifical intelligence, salesforce, microsoft dynamics", metaTitle, metaDescription, images, links) => {
    const results = {
      score: 0,
      feedback: [],
    };
  
    const countWords = (text) => text.split(/\s+/).filter(word => word.length > 0).length;
    const keywordCount = (text) => {
      const regex = new RegExp(`\\b${focusKeyword?.toLowerCase()}\\b`, 'gi');
      return (text.toLowerCase().match(regex) || []).length;
    };
    const calculateDensity = (text) => {
      const totalWords = countWords(text);
      const keywordOccurrences = keywordCount(text);
      return totalWords > 0 ? (keywordOccurrences / totalWords) * 100 : 0;
    };
  
    if (metaTitle.toLowerCase().includes(focusKeyword?.toLowerCase())) {
      results.score += 20;
      results.feedback.push('Good: Focus keyword found in title.');
    } else {
      results.feedback.push('Poor: Add the focus keyword to the title.');
    }
  
    if (metaDescription.toLowerCase().includes(focusKeyword?.toLowerCase())) {
      results.score += 15;
      results.feedback.push('Good: Focus keyword found in meta description.');
    } else {
      results.feedback.push('Poor: Add the focus keyword to the meta description.');
    }
  
    const density = calculateDensity(content);
    if (density >= 0.5 && density <= 2.5) {
      results.score += 20;
      results.feedback.push('Good: Keyword density is optimal.');
    } else if (density > 0) {
      results.score += 10;
      results.feedback.push(`OK: Keyword density (${density.toFixed(1)}%) is outside optimal range (0.5–2.5%).`);
    } else {
      results.feedback.push('Poor: Focus keyword not found in content.');
    }
  
    // 4. Keyword in Headings (15 points)
    const headingRegex = /<h[1-2][^>]*>(.*?)<\/h[1-2]>/gi;
    const headings = content.match(headingRegex) || [];
    const hasKeywordInHeading = headings.some(heading =>
      heading.toLowerCase().includes(focusKeyword?.toLowerCase())
    );
    if (hasKeywordInHeading) {
      results.score += 15;
      results.feedback.push('Good: Focus keyword found in heading(s).');
    } else {
      results.feedback.push('Poor: Add the focus keyword to at least one H1 or H2.');
    }
  
    // 5. Readability (15 points)
    const sentences = content.replace(/<\/?[^>]+>/g, '').split(/[.!?]+/).filter(s => s.trim());
    const avgSentenceLength = sentences.reduce((sum, s) => sum + countWords(s), 0) / sentences.length || 0;
    const paragraphs = content.match(/<p[^>]*>(.*?)<\/p>/gi) || [];
    const avgParagraphLength = paragraphs.reduce((sum, p) => sum + countWords(p), 0) / paragraphs.length || 0;
    if (avgSentenceLength < 20 && avgParagraphLength < 150) {
      results.score += 15;
      results.feedback.push('Good: Content is readable (short sentences and paragraphs).');
    } else {
      results.score += 5;
      results.feedback.push('OK: Improve readability by shortening sentences or paragraphs.');
    }
  
    // 6. Image Alt Tags (10 points)
    const hasImages = images && images.length > 0;
    const allImagesHaveAlt = hasImages && images.every(img => img.alt && img.alt.trim());
    const keywordInAlt = hasImages && images.some(img => img.alt.toLowerCase().includes(focusKeyword?.toLowerCase()));
    if (allImagesHaveAlt && keywordInAlt) {
      results.score += 10;
      results.feedback.push('Good: All images have alt tags with focus keyword.');
    } else if (allImagesHaveAlt) {
      results.score += 5;
      results.feedback.push('OK: All images have alt tags, but add the focus keyword to at least one.');
    } else {
      results.feedback.push('Poor: Ensure all images have alt tags.');
    }
  
    if(links){
        const hasInternalLink = links.some(link => link.isInternal);
        const hasExternalLink = links.some(link => !link.isInternal);
        if (hasInternalLink && hasExternalLink) {
          results.score += 5;
          results.feedback.push('Good: Internal and external links found.');
        } else {
          results.feedback.push('Poor: Add at least one internal and one external link.');
        }
    }
   
  
    // Determine score tier
    results.tier = results.score >= 80 ? 'Good' : results.score >= 60 ? 'OK' : 'Poor';
  
    return results;
  };