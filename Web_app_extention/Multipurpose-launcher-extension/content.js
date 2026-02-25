// content.js - Scans the page for ASIN patterns and returns them

function extractASINs() {
  const asins = new Set();
  
  // 1. Extract from URL (/dp/ or /product/ patterns)
  const urlMatch = window.location.href.match(/\/(dp|product)\/([A-Z0-9]{10})\b/);
  if (urlMatch) asins.add(urlMatch[2]);
  
  // 2. Extract from Product Information table (ASIN row)
  document.querySelectorAll('th, td, dt, dd, span').forEach(el => {
    if (/ASIN/i.test(el.textContent)) {
      const nextEl = el.nextElementSibling || el.parentElement?.nextElementSibling;
      if (nextEl) {
        const match = nextEl.textContent.match(/\b([A-Z0-9]{10})\b/);
        if (match) asins.add(match[1]);
      }
    }
  });
  
  // 3. Extract B0-prefixed ASINs from text (most common)
  const bodyText = document.body.innerText || "";
  const b0Matches = bodyText.matchAll(/\b(B0[0-9A-Z]{8})\b/g);
  for (const match of b0Matches) {
    asins.add(match[1]);
  }
  
  // 4. Extract from HTML (data attributes, hidden fields)
  const htmlText = document.documentElement.innerHTML || "";
  const htmlMatches = htmlText.matchAll(/\b(B0[0-9A-Z]{8})\b/g);
  for (const match of htmlMatches) {
    asins.add(match[1]);
  }
  
  // 5. Extract 10-digit numeric ASINs (books/ISBN)
  const numericMatches = bodyText.matchAll(/\b([0-9]{10})\b/g);
  for (const match of numericMatches) {
    const num = match[1];
    // Only include if appears near "ASIN" or "ISBN" keyword
    const context = bodyText.substring(Math.max(0, match.index - 50), match.index + 60);
    if (/ASIN|ISBN|Product/i.test(context)) {
      asins.add(num);
    }
  }
  
  // 6. Extract other B-prefixed ASINs (B followed by 9 alphanumeric)
  const bMatches = bodyText.matchAll(/\b(B[A-Z0-9]{9})\b/g);
  for (const match of bMatches) {
    const asin = match[1];
    // Must have at least 2 letters to avoid false positives
    const letterCount = (asin.match(/[A-Z]/g) || []).length;
    if (letterCount >= 2) {
      asins.add(asin);
    }
  }
  
  return Array.from(asins);
}

// Listen for message from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getASINs") {
    const asins = extractASINs();
    sendResponse({ asins: asins });
  }
  return true;
});
