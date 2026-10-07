import fs from "fs";
import path from "path";

console.log("==================================================");
console.log("   SEO & SITEMAP VERIFICATION FOR ARBEITSSTUNDENRECHNER.DE");
console.log("==================================================\n");

const outDir = path.resolve("out");
const expectedDomain = "https://arbeitsstundenrechner.de";

if (!fs.existsSync(outDir)) {
  console.error("ERROR: out/ directory does not exist!");
  process.exit(1);
}

// 1. Check robots.txt
const robotsPath = path.join(outDir, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  console.error("FAIL: out/robots.txt is missing!");
} else {
  const robotsContent = fs.readFileSync(robotsPath, "utf8");
  console.log("1. robots.txt Verification:");
  console.log(robotsContent.trim());
  const hasSitemap = robotsContent.includes(`Sitemap: ${expectedDomain}/sitemap.xml`);
  const isAllowAll = robotsContent.includes("Allow: /");
  console.log(`- Allows search engines: ${isAllowAll ? "PASS" : "FAIL"}`);
  console.log(`- References sitemap: ${hasSitemap ? "PASS" : "FAIL"}\n`);
}

// 2. Check sitemap.xml
const sitemapPath = path.join(outDir, "sitemap.xml");
let sitemapUrls = [];
if (!fs.existsSync(sitemapPath)) {
  console.error("FAIL: out/sitemap.xml is missing!");
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  console.log("2. sitemap.xml Verification:");
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    sitemapUrls.push(match[1]);
  }
  console.log(`Found ${sitemapUrls.length} URLs in sitemap:`);
  sitemapUrls.forEach((u, i) => console.log(`  [${i + 1}] ${u}`));
  
  // Verify all URLs start with expected domain
  const allCorrectDomain = sitemapUrls.every(u => u.startsWith(expectedDomain));
  console.log(`\n- All sitemap URLs match ${expectedDomain}: ${allCorrectDomain ? "PASS" : "FAIL"}`);
  
  // Check that every sitemap URL maps to an actual HTML file in out/
  let missingFiles = 0;
  for (const url of sitemapUrls) {
    const relPath = url.replace(expectedDomain, "").replace(/^\//, "");
    const targetFile = relPath === "" 
      ? path.join(outDir, "index.html") 
      : path.join(outDir, relPath, "index.html");
    if (!fs.existsSync(targetFile)) {
      console.error(`- MISSING file for sitemap URL ${url}: ${targetFile}`);
      missingFiles++;
    }
  }
  console.log(`- All sitemap URLs exist on disk as HTML: ${missingFiles === 0 ? "PASS" : "FAIL"}\n`);
}

// 3. Inspect HTML Pages for SEO Tags & Broken Links
console.log("3. HTML Pages Deep SEO Audit:");

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith(".html")) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(outDir);
console.log(`Found ${htmlFiles.length} HTML files to inspect.\n`);

let totalErrors = 0;

for (const file of htmlFiles) {
  const relFile = path.relative(outDir, file);
  const content = fs.readFileSync(file, "utf8");

  // Check Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : null;

  // Check Meta Description
  const descMatch = content.match(/<meta name="description" content="(.*?)"/);
  const desc = descMatch ? descMatch[1] : null;

  // Check Canonical
  const canonicalMatch = content.match(/<link rel="canonical" href="(.*?)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  // Check Robots meta (ensure no 'noindex')
  const noindexMatch = content.match(/<meta name="robots" content=".*noindex.*"/);

  // Check H1
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/);

  console.log(`--- [ ${relFile} ] ---`);
  if (!title) {
    console.error(`  [FAIL] Missing title tag!`);
    totalErrors++;
  } else {
    console.log(`  Title: "${title.slice(0, 70)}${title.length > 70 ? "..." : ""}"`);
  }

  if (!desc) {
    console.error(`  [FAIL] Missing meta description!`);
    totalErrors++;
  } else {
    console.log(`  Desc:  "${desc.slice(0, 80)}${desc.length > 80 ? "..." : ""}"`);
  }

  if (!canonical) {
    console.error(`  [FAIL] Missing canonical tag!`);
    totalErrors++;
  } else {
    const isDomainMatch = canonical.startsWith(expectedDomain);
    console.log(`  Canonical: ${canonical} (${isDomainMatch ? "MATCH" : "DOMAIN MISMATCH"})`);
    if (!isDomainMatch) totalErrors++;
  }

  if (noindexMatch && !relFile.includes("404")) {
    console.error(`  [CRITICAL FAIL] Unintended noindex found!`);
    totalErrors++;
  } else if (noindexMatch) {
    console.log(`  Indexability: Correctly noindex (404 error page)`);
  } else {
    console.log(`  Indexability: OK (index, follow)`);
  }

  if (h1Match) {
    console.log(`  H1: "${h1Match[1].replace(/<[^>]+>/g, '').trim().slice(0, 70)}"`);
  }

  // Check internal links in this HTML file
  const linkMatches = [...content.matchAll(/href="(\/[^"#?]*)"/g)].map(m => m[1]);
  for (const l of linkMatches) {
    if (l.startsWith("/_next")) continue; // skip assets
    const cleanLink = l.replace(/^\//, "");
    const test1 = path.join(outDir, cleanLink, "index.html");
    const test2 = path.join(outDir, cleanLink + ".html");
    const test3 = path.join(outDir, cleanLink);
    if (!fs.existsSync(test1) && !fs.existsSync(test2) && !fs.existsSync(test3)) {
      console.error(`  [BROKEN LINK] in ${relFile} pointing to ${l}`);
      totalErrors++;
    }
  }
  console.log("");
}

console.log("==================================================");
if (totalErrors === 0) {
  console.log("✅ ALL SEO CHECKS, SITEMAP, CANONICALS & LINKS PASSED PERFECTLY!");
} else {
  console.error(`❌ FOUND ${totalErrors} ISSUES. PLEASE REVIEW.`);
  process.exitCode = 1;
}
console.log("==================================================\n");
