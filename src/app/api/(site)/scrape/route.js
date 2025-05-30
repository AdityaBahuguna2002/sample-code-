import puppeteer from "puppeteer";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return Response.json({ error: "Missing blog slug" }, { status: 400 });
    }

    const url = `https://cynoteck.com/blog/${slug}/`;

    const browser = await puppeteer.launch({
      headless: true, // Use headless mode for efficiency
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set a realistic user agent to avoid detection
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    await page.setViewport({ width: 1280, height: 800 });

    // Allow CSS & fonts (fix missing icons)
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const resourceType = req.resourceType();
      if (["image", "script"].includes(resourceType)) {
        req.abort(); // Block images & scripts (optional, speeds up)
      } else {
        req.continue();
      }
    });

    // Navigate with retry mechanism
    let attempt = 0;
    while (attempt < 3) {
      try {
        await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
        break; // Exit loop on success
      } catch (err) {
        attempt++;
        console.log(`Retrying (${attempt}/3)...`);
        if (attempt === 3) throw err;
      }
    }

    // **Inject missing external styles (Fix icons)**
    await page.evaluate(async () => {
      const externalStyles = Array.from(document.querySelectorAll("link[rel='stylesheet']")).map(link => link.href);
      for (const href of externalStyles) {
        const res = await fetch(href);
        const css = await res.text();
        const styleTag = document.createElement("style");
        styleTag.textContent = css;
        document.head.appendChild(styleTag);
      }
    });

    // **Extract Blog Data**
    const blogData = await page.evaluate(() => {
      const section = document.querySelector("section.blog-area.section-padding");
      if (!section) return { error: "Blog content not found" };

      // Convert relative image URLs to absolute
      section.querySelectorAll("img").forEach((img) => {
        if (img.src.startsWith("/")) {
          img.src = window.location.origin + img.src;
        }
      });

      return {
        title: section.querySelector("h1")?.innerText || "Untitled",
        image: section.querySelector("img")?.src || "/fallback-image.jpg",
        content: section.innerHTML || "No content available",
      };
    });

    // Extract styles again after injecting external CSS
    const styles = await page.evaluate(() => {
      return Array.from(document.styleSheets)
        .map((sheet) => {
          try {
            return Array.from(sheet.cssRules).map((rule) => rule.cssText).join(" ");
          } catch {
            return "";
          }
        })
        .join(" ");
    });

    await browser.close();

    return Response.json({ ...blogData, styles });
  } catch (error) {
    console.error("Scraping error:", error);
    return Response.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
