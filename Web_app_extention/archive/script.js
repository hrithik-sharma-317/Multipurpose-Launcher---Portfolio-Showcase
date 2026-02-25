// This script is protected against copying
(function() {
    // Main functionality wrapped in IIFE to prevent direct access to variables
    document.addEventListener('DOMContentLoaded', function() {
        // Add interactive hover effects to cards
        document.querySelectorAll('.link-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('animate__animated', 'animate__pulse');
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('animate__animated', 'animate__pulse');
            });
        });
        
        // Add button click effects
        document.querySelectorAll('.launch-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.add('animate__animated', 'animate__rubberBand');
                setTimeout(() => {
                    this.classList.remove('animate__animated', 'animate__rubberBand');
                }, 1000);
            });
        });
        
        // Add focus effects to inputs
        document.querySelectorAll('textarea').forEach(textarea => {
            textarea.addEventListener('focus', function() {
                this.closest('.input-group').style.boxShadow = 'var(--shadow-md)';
            });
            
            textarea.addEventListener('blur', function() {
                this.closest('.input-group').style.boxShadow = 'var(--shadow-sm)';
            });
        });
        
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const linkCards = document.querySelectorAll('.link-card');
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            linkCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show/hide categories based on visible cards
            document.querySelectorAll('.category').forEach(category => {
                const visibleCards = Array.from(category.querySelectorAll('.link-card')).filter(card => 
                    card.style.display !== 'none'
                );
                
                if (visibleCards.length === 0 && searchTerm !== '') {
                    category.style.display = 'none';
                } else {
                    category.style.display = 'block';
                }
            });
        });
        
        // Launch button functionality
        const launchButtons = document.querySelectorAll('.launch-btn');
        
        launchButtons.forEach(button => {
            button.addEventListener('click', function() {
                const inputGroup = this.closest('.input-group');
                const inputType = inputGroup.querySelector('h3').textContent;
                const inputValue = inputGroup.querySelector('textarea').value.trim();
                const marketplace = inputGroup.querySelector('.marketplace')?.value || 'na';
                
                if (!inputValue) {
                    alert('Please enter at least one ID to launch');
                    return;
                }
                
                // Split input by newlines to handle multiple IDs
                const ids = inputValue.split(/\r?\n/).filter(id => id.trim() !== '');
                
                if (inputType === 'Seller ID/Brand registry') {
                    const sellerTool = inputGroup.querySelector('.seller-tool')?.value || 'paragon';
                    
                    ids.forEach(id => {
                        const trimmedId = id.trim();
                        if (trimmedId) {
                            if (sellerTool === 'buyer') {
                                const url = `https://paragon-na.amazon.com/hz/dvr-search/detail?tenantId=310&pageContext={"pageId":"abuse-concessions-investigation-page","program":"AbusePrevention","caseSubject":{"subjectType":"buyerCustomerId","subjectValue":"${encodeURIComponent(trimmedId)}"},"marketplaceId":"1","contextType":"SEARCH","searchScopeId":"concessions-search-by-customer-id-read-only","searchValue":"${encodeURIComponent(trimmedId)}","isSecuredLink":true}&searchScopeId=concessions-search-by-customer-id-read-only`;
                                window.open(url, '_blank');
                            } else if (sellerTool === 'brand') {
                                const searchType = document.getElementById('brandSearchType').value;
                                const urls = {
                                    'name': `https://internal.brandregistry.amazon.dev/search/q?name=${encodeURIComponent(trimmedId)}`,
                                    'id': `https://internal.brandregistry.amazon.dev/search/q?id=${encodeURIComponent(trimmedId)}`,
                                    'mcid': `https://internal.brandregistry.amazon.dev/search/q?mcid=${encodeURIComponent(trimmedId)}`,
                                    'cid': `https://internal.brandregistry.amazon.dev/search/q?cid=${encodeURIComponent(trimmedId)}`,
                                    'companyCode': `https://internal.brandregistry.amazon.dev/search/q?companyCode=${encodeURIComponent(trimmedId)}"`,
                                    'partnerAccountId': `https://internal.brandregistry.amazon.dev/search/q?partnerAccountId=${encodeURIComponent(trimmedId)}`,
                                    'trademarkNumber': `https://internal.brandregistry.amazon.dev/search/q?trademarkNumber=${encodeURIComponent(trimmedId)}&trademarkRegistrationOffice=USPTO`
                                };
                                window.open(urls[searchType], '_blank');
                            } else {
                                // Seller ID format - use Paragon search with correct parameters
                                const paragonDomain = marketplace === 'na' ? 'paragon-na' : 
                                                     marketplace === 'eu' ? 'paragon-eu' : 'paragon-fe';
                                window.open(`https://${paragonDomain}.amazon.com/hz/search?searchQuery=${encodeURIComponent(trimmedId)}&contentType=CASE&sortField=creationDate&sortOrder=desc#`, '_blank');
                            }
                        }
                    });
                } else if (inputType === 'ASINs') {
                    // This code is disabled to prevent opening on Amazon website
                    return;
                } else if (inputType === "Search for SIM's") {
                    const searchType = document.getElementById('simSearchType').value;
                    ids.forEach(id => {
                        const trimmedId = id.trim();
                        if (trimmedId) {
                            let url;
                            if (searchType === 'requester') {
                                url = `https://issues.amazon.com/issues/search?q=requester%3A(${encodeURIComponent(trimmedId)})&sort=lastUpdatedConversationDate+desc&selectedDocument`;
                            } else if (searchType === 'assignee') {
                                url = `https://issues.amazon.com/issues/search?q=assignee%3A(${encodeURIComponent(trimmedId)})&sort=lastUpdatedConversationDate+desc&selectedDocument`;
                            } else {
                                url = `https://issues.amazon.com/issues/search?q=(${encodeURIComponent(trimmedId)})&sort=lastUpdatedConversationDate+desc&selectedDocument`;
                            }
                            window.open(url, '_blank');
                        }
                    });
                } else if (inputType === 'Case IDs') {
                    ids.forEach(id => {
                        const trimmedId = id.trim();
                        if (trimmedId) {
                            const paragonDomain = marketplace === 'na' ? 'paragon-na' : 
                                               marketplace === 'eu' ? 'paragon-eu' : 
                                               marketplace === 'fe' ? 'paragon-fe' : 'paragon-na';
                            window.open(`https://${paragonDomain}.amazon.com/hz/case?caseId=${encodeURIComponent(trimmedId)}`, '_blank');
                        }
                    });
                }
            });
        });
        
        // Tool card click handling
        linkCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const toolName = this.querySelector('h3').textContent;
                
                // Define URLs for different tools
                let toolUrl = '';
                
                switch(toolName) {
                    case 'Paragon':
                        toolUrl = 'https://paragon-na.amazon.com';
                        break;
                    case 'CSI':
                        toolUrl = 'https://csi.amazon.com';
                        break;
                    case 'TimeMachine':
                        toolUrl = 'https://timemachine.amazon.com';
                        break;
                    case 'Seller Central':
                        toolUrl = 'https://sellercentral.amazon.com';
                        break;
                    case 'SIM Search':
                        toolUrl = 'https://issues.amazon.com/issues/search';
                        break;
                    case 'Media Central':
                        toolUrl = 'https://console.harmony.a2z.com/media-central/product-images';
                        break;
                    case 'Darwin':
                        toolUrl = 'https://darwin-corrections.amazon.com/#/';
                        break;
                    case 'CP Central':
                        toolUrl = 'https://www.cp-central.catalog.amazon.dev/#/members';
                        break;
                    case 'Nemo Tool':
                        toolUrl = 'https://paragon-na.amazon.com/admin/bulkSecureLink';
                        break;
                    case 'Seller SIM':
                        toolUrl = 'https://sellersim.amazon.com';
                        break;
                    case 'Buyer SIM':
                        toolUrl = 'https://buyersim.amazon.com';
                        break;
                    case 'WhoIs':
                        toolUrl = 'https://whois.domaintools.com';
                        break;
                    case 'What is my IP':
                        toolUrl = 'https://whatismyipaddress.com/ip-lookup';
                        break;
                    case 'Amazon Translate':
                        toolUrl = 'https://www.sli.translator.amazon.dev/';
                        break;
                    case 'Global Transfer Guide':
                        toolUrl = 'https://share.amazon.com/sites/amazonwatson/Multiple_Verticals/SOPs/Global_Transfer_Guide.aspx';
                        break;
                    case 'EUIPO':
                        toolUrl = 'https://www.euipo.europa.eu/en';
                        break;
                    case 'WIPO':
                        toolUrl = 'https://branddb.wipo.int/';
                        break;
                    case 'USPTO':
                        toolUrl = 'https://uspto.gov';
                        break;
                    case 'IP India':
                        toolUrl = 'https://ipindia.gov.in/';
                        break;
                    case 'IP Tracker':
                        toolUrl = 'https://www.iptrackeronline.com/';
                        break;
                    case 'Brand Registry':
                        toolUrl = 'https://internal.brandregistry.amazon.dev/';
                        break;
                    default:
                        const toolNameForUrl = toolName.toLowerCase().replace(/\s+/g, '-');
                        toolUrl = `https://internal.amazon.com/tools/${toolNameForUrl}`;
                }
                
                // Open the tool URL in a new tab
                window.open(toolUrl, '_blank');
            });
        });
    });
    
    // Prevent copying of script content
    document.addEventListener('selectstart', function(e) {
        const target = e.target;
        if (target.tagName === 'SCRIPT' || 
            (target.closest && target.closest('script'))) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable right-click on script tags
    document.addEventListener('contextmenu', function(e) {
        const target = e.target;
        if (target.tagName === 'SCRIPT' || 
            (target.closest && target.closest('script'))) {
            e.preventDefault();
            return false;
        }
    });
    
    // Override the native toString methods to prevent script inspection
    Function.prototype.toString = function() {
        return 'Function code is protected';
    };
})();