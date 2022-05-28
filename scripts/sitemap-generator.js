const fs = require("fs");
const glob = require("glob");

function addPage(page) {
  page =
    page[page.length - 1] === "/" ? page.substring(0, page.length - 1) : page;
  return `<url>
    <loc>${`${process.env.NEXT_PUBLIC_PRODUCTION_ROOT_URL}/${page}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  const blogsDir = "_posts/**/*.*";
  let blogPaths = await glob.sync(blogsDir);

  const pagesDir = "pages/**/*.tsx";
  let pagesPaths = await glob.sync(pagesDir);
  pagesPaths = pagesPaths
    .filter((path) => !path.includes("["))
    .filter((path) => !path.includes("/_"))
    .filter((path) => !path.includes("404"));

  blogPaths = blogPaths.map(
    (rawBlogName) =>
      "blog" + rawBlogName.replace("_posts", "").replace(".md", "")
  );

  pagesPaths = pagesPaths.map((rawPageName) =>
    rawPageName.replace("pages/", "").replace(".tsx", "").replace("index", "")
  );

  const allPages = [...pagesPaths, ...blogPaths];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages.map(addPage).join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}
generateSitemap();
