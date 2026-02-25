Summary of All Changes Made Today
1. Physical ID Search Section (New Feature)
Location: Between ASINs and Order ID/ASIN Search sections

Functionality: Opens Media Central image lookup with multiple Physical IDs

URL: https://console.harmony.a2z.com/media-central/image-lookup?physicalIds=ID1,ID2,ID3

Features: Supports multiple IDs (one per line), comma-separated in URL

2. Search for SIM's Section (Enhanced)
Added: Dropdown with 3 search type options

Keyword: https://issues.amazon.com/issues/search?q=(INPUT)&sort=lastUpdatedConversationDate+desc&selectedDocument

Requester: https://issues.amazon.com/issues/search?q=requester%3A(INPUT)&sort=lastUpdatedConversationDate+desc&selectedDocument

Assignee: https://issues.amazon.com/issues/search?q=assignee%3A(INPUT)&sort=lastUpdatedConversationDate+desc&selectedDocument

Changed: Placeholder from "Enter Seller ID" to "Enter search term"

3. Order ID / ASIN Search Section (Modified)
ASIN Search URL Updated:

Old: https://sellercentral.amazon.${domain}/orders-v3/search?page=1&q=${ASIN}&qt=asin

New: https://sellercentral.amazon.${domain}/orders-v3/search?date-range=last-365&q=${ASIN}&qt=asin

Change: Added date-range=last-365 parameter and removed page=1 parameter

Order ID URL: Unchanged - still uses dynamic domain

4. Bug Fix
Fixed JavaScript syntax error in script.js (removed stray text)

Restored Seller ID/Brand registry section functionality

Files Modified
Multipurpose_Launcher.html - All HTML and inline JavaScript changes

script.js - SIM search logic and bug fix