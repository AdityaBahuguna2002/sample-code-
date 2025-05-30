import Detail from "@/components/site/resources/Blog/Detail"
import { getPost } from "@/lib/api/site/postApi";
import { redirect } from "next/navigation";

const BASE_URL =  process.env.DEVELOPEMENT ? "https://0434-49-249-156-2.ngrok-free.app" : "https://www.cynoteck.com";

export async function generateMetadata(props) {
  const {params} = props;
  const {slug} = await params;
 
  const { post, meta } = await getPost(slug, "blog-post");

    if (!post || !meta) {
    return {
      title: "Not Found",
      description: "This case study could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta?.ogTitle || meta?.title,
    description: meta?.ogDescription || meta?.description,
    author: {
      "@type": "Person",
      name: meta?.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: meta?.publisherName,
      logo: meta?.publisherLogo,
    },
    datePublished: meta?.datePublished,
    dateModified: meta?.dateModified,
    image: meta?.ogImage ? meta.ogImage : null,
    mainEntityOfPage: `${BASE_URL}/case-study/${slug}`,
  url: `${BASE_URL}/case-study/${slug}`,
  };

  return {
    title: meta?.title || post?.title,
    description: meta?.description,
    connonical: `${BASE_URL}/case-study/${slug}`,
    openGraph: {
      title: meta?.ogTitle,
      description: meta?.ogDescription,
      images: meta?.ogImage ? [{ url: meta.ogImage, alt: meta.title }] : [],
      type: "article",
      publishedTime: meta?.datePublished,
      modifiedTime: meta?.dateModified,
      authors: meta?.authorName ? [meta.authorName] : [],
    },
    twitter: {
      card: meta?.twitterCard || "summary_large_image", // Ensure default card type
      title: meta?.ogTitle || meta?.title,
      description: meta?.ogDescription || meta?.description,
      creator: meta?.twitterCreator,
      images: meta?.ogImage ? [{
        url: meta.ogImage,
        width: 1200,    // Recommended size for social sharing
        height: 630,    // 1.91:1 aspect ratio
        alt: meta?.ogDescription || meta?.description,
      }] : [],
    },
    robots: {
      index: !meta?.noIndex,
      follow: !meta?.noFollow,
    },
    // JSON-LD structured data
    jsonLd: JSON.stringify(jsonLd),
  };
}

export default async function BlogDetailPage({params}) {
  // const {params} = props;

  const {slug} = await params;

  const { post, meta } = await getPost(slug, "case-study");


  if(!post && !meta) {
    redirect("/404");
  }
 

  return (
    <>
      {/* Add JSON-LD script to the <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: meta?.ogTitle || meta?.title,
            description: meta?.ogDescription || meta?.description,
            author: {
              "@type": "Person",
              name: meta?.authorName,
            },
            publisher: {
              "@type": "Organization",
              name: meta?.publisherName,
              logo: meta?.publisherLogo,
            },
            datePublished: meta?.datePublished,
            dateModified: meta?.dateModified,
            image: meta?.ogImage ? meta.ogImage : null,
            mainEntityOfPage: `${BASE_URL}/case-study/${slug}`,
            url: `${BASE_URL}/case-study/${slug}`,
          }),
        }}
      ></script>

      <Detail post={post} />
    </>
  );
}

