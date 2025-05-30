const categorySlugs = {
    Events: [
      "webinars", "conferences", "workshops", "meetups", "festivals", 
      "seminars", "trade-shows", "exhibitions", "networking", "summits",
      "panel-discussions", "hackathons", "launch-parties", "galas", "fundraisers",
      "concerts", "sports-events", "charity-runs", "awards-ceremonies", "open-houses",
      "product-demos", "training-sessions", "retreats", "symposiums", "fairs",
      "competitions", "celebrations", "anniversaries", "town-halls", "q-a-sessions",
      "live-streams", "pop-up-events", "cultural-festivals", "film-screenings", "book-launches",
      "art-exhibits", "tech-expos", "food-tastings", "fashion-shows", "career-fairs",
      "gaming-tournaments", "science-fairs", "music-festivals", "comedy-nights", "trivia-events",
      "dance-performances", "photography-walks", "cooking-classes", "wine-tastings", "community-days"
    ],
    Posts: [
      "social-media", "updates", "announcements", "tips", "stories",
      "photos", "videos", "memes", "quotes", "polls",
      "behind-the-scenes", "how-to", "news", "opinions", "questions",
      "throwbacks", "teasers", "challenges", "surveys", "infographics",
      "interviews", "recaps", "live-updates", "jokes", "tutorials",
      "lists", "warnings", "recommendations", "insights", "highlights",
      "contests", "user-stories", "events", "promotions", "trends",
      "hacks", "milestones", "fun-facts", "debates", "inspirations",
      "alerts", "greetings", "previews", "comparisons", "reviews",
      "celebrations", "shoutouts", "guides", "lessons", "spotlights"
    ],
    Newsletters: [
      "weekly-digest", "industry-news", "promotions", "events", "tips",
      "monthly-recap", "product-updates", "special-offers", "insights", "trends",
      "announcements", "customer-stories", "expert-advice", "case-studies", "surveys",
      "company-news", "tech-updates", "how-to-guides", "interviews", "best-practices",
      "research-findings", "upcoming-releases", "policy-changes", "milestones", "faqs",
      "market-analysis", "success-tips", "event-recaps", "partner-news", "tool-reviews",
      "curated-content", "spotlights", "challenges", "contests", "feedback-requests",
      "seasonal-updates", "inspiration", "warnings", "tutorials", "team-highlights",
      "data-insights", "new-features", "community-news", "health-tips", "travel-ideas",
      "lifestyle-trends", "educational-content", "fun-facts", "polls", "celebrations"
    ],
    Testimonials: [
      "customer-reviews", "success-stories", "feedback", "case-studies", "quotes",
      "user-experiences", "client-praise", "results", "endorsements", "recommendations",
      "before-and-after", "satisfaction-stories", "service-ratings", "product-feedback", "testimony",
      "impact-statements", "user-journeys", "positive-outcomes", "appreciations", "anecdotes",
      "real-life-examples", "client-wins", "performance-reviews", "support-feedback", "lessons-learned",
      "trust-signals", "user-highlights", "growth-stories", "transformation-tales", "gratitude",
      "feature-praise", "team-shoutouts", "quality-feedback", "reliability-notes", "value-insights",
      "experience-shares", "loyalty-stories", "improvement-feedback", "success-metrics", "happiness-quotes",
      "peer-reviews", "partner-feedback", "community-voices", "service-wins", "user-tips",
      "challenge-overcomes", "benefit-highlights", "authentic-reviews", "inspiration", "proof-points"
    ]
  };
  

  export  async function GET (req){
    
    const { searchParams } = new URL(req.url); 
    const slug = searchParams.get("slug");  
    const tag = searchParams.get("tag");

    
    if(!slug){
        return Response.json({
            status : 400,
            message: "Missing 'slug' query parameter"
        })
    }
    const category = categorySlugs[tag];
    const isSlugExists = category.includes(slug);

    if(isSlugExists){
        return Response.json({
            status : 403,
            message: "slug already exists"
        })
    }
    
    return Response.json({
        status: 200,
        message : "slug is available",
    })

  }