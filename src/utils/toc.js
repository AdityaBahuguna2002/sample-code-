export const extractHeadings = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const headings = Array.from(doc.querySelectorAll("h1")).map((el, index) => {
    const text = el.textContent;
    const tag = el.tagName.toLowerCase();
    if (!el.id) {
      el.id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "") + "-" + index;
    }
    return { id: el.id, text, tag };
  });

  return {
    htmlWithIds: doc.body.innerHTML,
    headings,
  };
};
