// Prints /cv to public/Wisdom-Ivie-CV.pdf using the locally installed Chrome or Edge.
// Usage: npm run build && npm run start (in another terminal) && npm run cv:pdf
// Override the target with CV_URL=http://localhost:3000/cv.
import { existsSync } from "node:fs";
import puppeteer from "puppeteer-core";

const url = process.env.CV_URL || "http://localhost:3000/cv";
const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
if (!executablePath) throw new Error("No Chrome/Edge found; set CHROME_PATH.");

const browser = await puppeteer.launch({ executablePath, headless: true });
const page = await browser.newPage();
await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: "public/Wisdom-Ivie-CV.pdf",
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log(`Wrote public/Wisdom-Ivie-CV.pdf from ${url}`);
