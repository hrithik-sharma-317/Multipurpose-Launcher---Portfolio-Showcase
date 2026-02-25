// popup.js - Complete Multipurpose Launcher functionality

const marketplacesByRegion = {
  'na': [
    { id: '1', name: 'US (1)' },
    { id: '7', name: 'CA (7)' },
    { id: '763040', name: 'MX (763040)' },
    { id: '526970', name: 'BR (526970)' }
  ],
  'eu': [
    { id: '3', name: 'UK (3)' },
    { id: '4', name: 'DE (4)' },
    { id: '5', name: 'FR (5)' },
    { id: '35691', name: 'IT (35691)' },
    { id: '44551', name: 'ES (44551)' },
    { id: '44571', name: 'IN (44571)' },
    { id: '328451', name: 'NL (328451)' },
    { id: '338801', name: 'AE (338801)' },
    { id: '338811', name: 'SA (338811)' },
    { id: '338851', name: 'TR (338851)' },
    { id: '409652051', name: 'EG (409652051)' },
    { id: '679831071', name: 'BE (679831071)' },
    { id: '680844071', name: 'ZA (680844071)' },
    { id: '704403121', name: 'SE (704403121)' },
    { id: '712115121', name: 'PL (712115121)' }
  ],
  'fe': [
    { id: '6', name: 'JP (6)' },
    { id: '3240', name: 'CN (3240)' },
    { id: '111172', name: 'AU (111172)' },
    { id: '151302', name: 'SG (151302)' }
  ],
  'other': [
    { id: '101418', name: 'Fulfillment (101418)' }
  ]
};

const orderDomainsByRegion = {
  'na': [
    { domain: 'com', name: 'US (.com)' },
    { domain: 'com', name: 'CA (.com)' },
    { domain: 'com', name: 'MX (.com)' }
  ],
  'eu': [
    { domain: 'co.uk', name: 'UK (.co.uk)' },
    { domain: 'de', name: 'DE (.de)' },
    { domain: 'fr', name: 'FR (.fr)' },
    { domain: 'it', name: 'IT (.it)' },
    { domain: 'es', name: 'ES (.es)' },
    { domain: 'nl', name: 'NL (.nl)' },
    { domain: 'se', name: 'SE (.se)' },
    { domain: 'pl', name: 'PL (.pl)' }
  ],
  'fe': [
    { domain: 'co.jp', name: 'JP (.co.jp)' },
    { domain: 'in', name: 'IN (.in)' },
    { domain: 'com.au', name: 'AU (.com.au)' },
    { domain: 'com.br', name: 'BR (.com.br)' },
    { domain: 'sg', name: 'SG (.sg)' },
    { domain: 'ae', name: 'AE (.ae)' },
    { domain: 'sa', name: 'SA (.sa)' }
  ]
};

const urlTemplates = {
  'cp': 'https://www.cp-central.catalog.amazon.dev/#/members?asins={asin}&programs=RestrictedProducts,ProductSafety,RecalledProducts,OffensiveProducts,EPR,FoodSafety&marketplaces={marketplaceId}',
  'csi-tm': 'https://timemachine.amazon.com/index.html#/product/{asin}',
  'media': 'https://console.harmony.a2z.com/media-central/product-images?asin={asin}'
};

function buildCSIUrl(asin, marketplaceId, region) {
  const viewType = document.getElementById('csiViewType').value;
  const keyword = document.getElementById('csiKeyword').value.trim();
  const mpId = viewType === 'domains_for_asin' ? '' : marketplaceId;
  let merchantId = '';
  let customerId = '';
  
  if (viewType === 'asin_sku_mappings_by_merchant') {
    const merchantInput = document.getElementById('csiMerchantId').value.trim();
    merchantId = merchantInput;
    customerId = merchantInput;
  }
  
  return `https://csi.amazon.com/view?view=${viewType}&item_id=${asin}&marketplace_id=${mpId}&customer_id=${customerId}&merchant_id=${merchantId}&sku=&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id=&order_id=&external_id=&page_token_provided=false&search_string=&realm=USAmazon&region=${region}&stage=prod&domain_id=&tb=true&keyword=${encodeURIComponent(keyword)}&submit=Show`;
}

let detectedASINs = [];

// Save state to storage
async function saveState() {
  const state = {
    detectedASINs: detectedASINs,
    selectedASINs: getSelectedASINs(),
    selectedTools: Array.from(document.querySelectorAll('.tool-cb:checked')).map(cb => cb.value),
    caseInput: document.getElementById('caseInput')?.value || '',
    sellerInput: document.getElementById('sellerInput')?.value || '',
    orderInput: document.getElementById('orderInput')?.value || '',
    simInput: document.getElementById('simInput')?.value || '',
    simKeywords: document.getElementById('simKeywords')?.value || '',
    physicalInput: document.getElementById('physicalInput')?.value || '',
    region: document.getElementById('region')?.value || 'na',
    marketplace: document.getElementById('marketplace')?.value || '1',
    toolSelect: document.getElementById('toolSelect')?.value || 'cp',
    csiViewType: document.getElementById('csiViewType')?.value || 'blame_o',
    csiKeyword: document.getElementById('csiKeyword')?.value || '',
    csiMerchantId: document.getElementById('csiMerchantId')?.value || '',
    timestamp: Date.now()
  };
  await chrome.storage.local.set({ multipurposeLauncherState: state });
}

// Load state from storage
async function loadState() {
  const result = await chrome.storage.local.get('multipurposeLauncherState');
  const state = result.multipurposeLauncherState;
  
  if (state) {
    // Check if data is older than 24 hours
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const now = Date.now();
    
    if (state.timestamp && (now - state.timestamp) > twentyFourHours) {
      // Data expired, clear it
      await chrome.storage.local.remove('multipurposeLauncherState');
      return;
    }
    
    if (state.detectedASINs && state.detectedASINs.length > 0) {
      detectedASINs = state.detectedASINs;
      renderASINList(detectedASINs);
      
      // Restore ASIN selections
      if (state.selectedASINs) {
        setTimeout(() => {
          document.querySelectorAll('.asin-checkbox').forEach(cb => {
            cb.checked = state.selectedASINs.includes(cb.value);
          });
          updateSelectedCount();
        }, 100);
      }
    }
    
    // Restore tool checkbox selections
    if (state.selectedTools) {
      setTimeout(() => {
        document.querySelectorAll('.tool-cb').forEach(cb => {
          cb.checked = state.selectedTools.includes(cb.value);
        });
        toggleCSIFields();
      }, 100);
    }
    
    if (state.caseInput) document.getElementById('caseInput').value = state.caseInput;
    if (state.sellerInput) document.getElementById('sellerInput').value = state.sellerInput;
    if (state.orderInput) document.getElementById('orderInput').value = state.orderInput;
    if (state.simInput) document.getElementById('simInput').value = state.simInput;
    if (state.simKeywords) document.getElementById('simKeywords').value = state.simKeywords;
    if (state.physicalInput) document.getElementById('physicalInput').value = state.physicalInput;
    if (state.region) document.getElementById('region').value = state.region;
    if (state.toolSelect) document.getElementById('toolSelect').value = state.toolSelect;
    if (state.csiViewType) document.getElementById('csiViewType').value = state.csiViewType;
    if (state.csiKeyword) document.getElementById('csiKeyword').value = state.csiKeyword;
    if (state.csiMerchantId) document.getElementById('csiMerchantId').value = state.csiMerchantId;
    
    if (state.marketplace) {
      updateMarketplaceOptions();
      document.getElementById('marketplace').value = state.marketplace;
    }
  }
}

// Reset all data
async function resetAll() {
  if (confirm('Reset all data? This will clear all inputs and detected ASINs.')) {
    await chrome.storage.local.remove('multipurposeLauncherState');
    detectedASINs = [];
    document.querySelectorAll('textarea').forEach(ta => ta.value = '');
    document.querySelectorAll('input[type="text"]').forEach(inp => inp.value = '');
    renderASINList([]);
    showStatus('✅ All data reset', 'success');
    location.reload();
  }
}

// Tab switching
function switchSection(sectionName) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  document.getElementById(`section-${sectionName}`).classList.add('active');
  document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
}

function updateMarketplaceOptions() {
  const region = document.getElementById('region').value;
  const mpSelect = document.getElementById('marketplace');
  
  mpSelect.innerHTML = marketplacesByRegion[region].map(mp => 
    `<option value="${mp.id}">${mp.name}</option>`
  ).join('');
}

function updateOrderDomainOptions() {
  const region = document.getElementById('orderRegion').value;
  const domainSelect = document.getElementById('orderDomain');
  
  domainSelect.innerHTML = orderDomainsByRegion[region].map(d => 
    `<option value="${d.domain}">${d.name}</option>`
  ).join('');
}

function toggleCSIFields() {
  const csiViewContainer = document.getElementById('csiViewContainer');
  const csiKeywordContainer = document.getElementById('csiKeywordContainer');
  const csiMerchantContainer = document.getElementById('csiMerchantContainer');
  const dropdownSelected = document.getElementById('toolSelect').value === 'csi';
  const checkboxChecked = document.querySelector('.tool-cb[value="csi"]')?.checked;
  
  if (dropdownSelected || checkboxChecked) {
    csiViewContainer.style.display = 'block';
    csiKeywordContainer.style.display = 'block';
    toggleMerchantField();
  } else {
    csiViewContainer.style.display = 'none';
    csiKeywordContainer.style.display = 'none';
    csiMerchantContainer.style.display = 'none';
  }
}

function toggleMerchantField() {
  const viewType = document.getElementById('csiViewType').value;
  const csiMerchantContainer = document.getElementById('csiMerchantContainer');
  csiMerchantContainer.style.display = viewType === 'asin_sku_mappings_by_merchant' ? 'block' : 'none';
}

function updateSelectedCount() {
  const checked = document.querySelectorAll(".asin-checkbox:checked").length;
  document.getElementById("count").textContent = `${checked} selected`;
}

function renderASINList(asins) {
  const listEl = document.getElementById("asin-list");

  if (!asins || asins.length === 0) {
    listEl.innerHTML = `<p class="no-asins">No ASINs found on this page.</p>`;
    return;
  }

  listEl.innerHTML = asins.map(asin => `
    <label class="asin-item" data-asin="${asin}">
      <input type="checkbox" class="asin-checkbox" value="${asin}" checked />
      <span class="asin-code">${asin}</span>
    </label>
  `).join("");

  document.querySelectorAll(".asin-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      updateSelectedCount();
      saveState();
    });
  });

  updateSelectedCount();
}

function addManualASIN(asin) {
  asin = asin.trim().toUpperCase();
  if (!asin || asin.length !== 10 || !/^[A-Z0-9]+$/.test(asin)) {
    if (asin) showStatus("⚠️ Invalid ASIN (must be 10 alphanumeric)", "warning");
    return;
  }
  
  const isNumeric = /^[0-9]{10}$/.test(asin);
  if (!isNumeric) {
    const letterCount = (asin.match(/[A-Z]/g) || []).length;
    if (letterCount < 2) {
      showStatus("⚠️ Invalid ASIN (must have at least 2 letters)", "warning");
      return;
    }
  }
  
  if (detectedASINs.includes(asin)) {
    const existingItem = document.querySelector(`.asin-item[data-asin="${asin}"]`);
    if (existingItem) {
      existingItem.style.background = '#ff9900';
      existingItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => { existingItem.style.background = ''; }, 1000);
    }
    showStatus(`ℹ️ ASIN already in list`, "info");
    return;
  }
  
  detectedASINs.unshift(asin);
  renderASINList(detectedASINs);
  saveState();
  showStatus(`✅ Added ${asin}`, "success");
}

function filterASINList(query) {
  query = query.trim().toUpperCase();
  const items = document.querySelectorAll('.asin-item');
  
  if (!query) {
    items.forEach(item => item.style.display = 'flex');
    return;
  }
  
  items.forEach(item => {
    const asin = item.dataset.asin;
    if (asin.includes(query)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function getSelectedASINs() {
  return [...document.querySelectorAll(".asin-checkbox:checked")].map(cb => cb.value);
}

function showStatus(msg, type = "info") {
  const el = document.getElementById("status");
  el.textContent = msg;
  el.className = `status ${type}`;
  setTimeout(() => { el.textContent = ""; el.className = "status"; }, 3000);
}

function launchTool(tool, asins, marketplaceId, region) {
  asins.forEach(asin => {
    let url;
    if (tool === 'csi') {
      url = buildCSIUrl(asin, marketplaceId, region);
    } else {
      url = urlTemplates[tool].replace(/{asin}/g, asin)
                              .replace(/{marketplaceId}/g, marketplaceId)
                              .replace(/{region}/g, region);
    }
    chrome.tabs.create({ url: url, active: false });
  });
}

async function launchToolsGrouped(tools, asins, marketplaceId, region) {
  for (const asin of asins) {
    const tabIds = [];
    
    for (const tool of tools) {
      let url;
      if (tool === 'csi') {
        url = buildCSIUrl(asin, marketplaceId, region);
      } else {
        url = urlTemplates[tool].replace(/{asin}/g, asin)
                                .replace(/{marketplaceId}/g, marketplaceId)
                                .replace(/{region}/g, region);
      }
      
      const tab = await chrome.tabs.create({ url: url, active: false });
      tabIds.push(tab.id);
    }
    
    if (tabIds.length > 0) {
      const groupId = await chrome.tabs.group({ tabIds: tabIds });
      await chrome.tabGroups.update(groupId, {
        title: asin,
        color: 'orange'
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchSection(btn.dataset.section);
      saveState();
    });
  });

  // Reset button
  document.getElementById('resetBtn').addEventListener('click', resetAll);

  // ASIN Section
  updateMarketplaceOptions();
  document.getElementById('region').addEventListener('change', () => {
    updateMarketplaceOptions();
    saveState();
  });
  document.getElementById('toolSelect').addEventListener('change', () => {
    toggleCSIFields();
    saveState();
  });
  document.getElementById('csiViewType').addEventListener('change', () => {
    toggleMerchantField();
    saveState();
  });
  
  document.querySelectorAll('.tool-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      toggleCSIFields();
      saveState();
    });
  });
  
  // Load saved state first
  await loadState();
  
  // Only scan for new ASINs if we're on the ASINs tab
  const activeSection = document.querySelector('.section.active');
  if (activeSection && activeSection.id === 'section-asins') {
    // Then scan for new ASINs
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, { action: "getASINs" }, (response) => {
        if (chrome.runtime.lastError || !response) {
          chrome.scripting.executeScript(
            { target: { tabId }, files: ["content.js"] },
            () => {
              chrome.tabs.sendMessage(tabId, { action: "getASINs" }, (res) => {
                const newASINs = res ? res.asins : [];
                // Merge with existing ASINs
                newASINs.forEach(asin => {
                  if (!detectedASINs.includes(asin)) {
                    detectedASINs.push(asin);
                  }
                });
                if (detectedASINs.length > 0) {
                  renderASINList(detectedASINs);
                  saveState();
                }
              });
            }
          );
          return;
        }
        const newASINs = response.asins || [];
        // Merge with existing ASINs
        newASINs.forEach(asin => {
          if (!detectedASINs.includes(asin)) {
            detectedASINs.push(asin);
          }
        });
        if (detectedASINs.length > 0) {
          renderASINList(detectedASINs);
          saveState();
        }
      });
    });
  }

  document.getElementById("selectAll").addEventListener("click", () => {
    document.querySelectorAll(".asin-checkbox").forEach(cb => cb.checked = true);
    updateSelectedCount();
    saveState();
  });

  document.getElementById("deselectAll").addEventListener("click", () => {
    document.querySelectorAll(".asin-checkbox").forEach(cb => cb.checked = false);
    updateSelectedCount();
    saveState();
  });

  document.getElementById("manualAsinInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const inputValue = e.target.value;
      addManualASIN(inputValue);
      e.target.value = "";
    }
  });

  document.getElementById("manualAsinInput").addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query === "") {
      // Show all ASINs when input is empty
      document.querySelectorAll('.asin-item').forEach(item => item.style.display = 'flex');
    } else {
      filterASINList(query);
    }
  });

  document.getElementById("singleLaunch").addEventListener("click", () => {
    const selected = getSelectedASINs();
    const mp = document.getElementById('marketplace').value;
    const region = document.getElementById('region').value.toUpperCase();
    const tool = document.getElementById('toolSelect').value;

    if (selected.length === 0) {
      showStatus("⚠️ No ASINs selected.", "warning");
      return;
    }

    launchTool(tool, selected, mp, region);
    showStatus(`✅ Opened ${selected.length} ASIN(s) in ${tool}`, "success");
  });

  document.getElementById("multiLaunch").addEventListener("click", async () => {
    const selected = getSelectedASINs();
    const mp = document.getElementById('marketplace').value;
    const region = document.getElementById('region').value.toUpperCase();
    let selectedTools = Array.from(document.querySelectorAll('.tool-cb:checked')).map(cb => cb.value);

    if (selected.length === 0) {
      showStatus("⚠️ No ASINs selected.", "warning");
      return;
    }

    if (selectedTools.length === 0) {
      selectedTools = [document.getElementById('toolSelect').value];
    }

    await launchToolsGrouped(selectedTools, selected, mp, region);
    showStatus(`✅ Opened ${selected.length} ASIN(s) in ${selectedTools.length} tool(s) (grouped)`, "success");
  });

  // Save state on all textarea/input changes
  document.querySelectorAll('textarea, input[type="text"], select').forEach(el => {
    el.addEventListener('change', saveState);
    el.addEventListener('input', saveState);
  });

  // Save checkbox state changes
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('asin-checkbox') || e.target.classList.contains('tool-cb')) {
      saveState();
    }
  });

  // Case IDs Section
  document.getElementById("caseLaunch").addEventListener("click", () => {
    const cases = document.getElementById('caseInput').value.trim().split('\n').filter(c => c.trim());
    const region = document.getElementById('caseRegion').value;

    if (cases.length === 0) {
      showStatus("⚠️ Enter at least one Case ID", "warning");
      return;
    }

    cases.forEach(caseId => {
      const url = `https://paragon-${region}.amazon.com/case/${caseId.trim()}`;
      chrome.tabs.create({ url, active: false });
    });

    showStatus(`✅ Opened ${cases.length} case(s)`, "success");
  });

  // Seller ID Section
  document.getElementById('sellerTool').addEventListener('change', function() {
    document.getElementById('brandSearchType').style.display = this.value === 'brand' ? 'block' : 'none';
  });

  document.getElementById("sellerLaunch").addEventListener("click", () => {
    const sellers = document.getElementById('sellerInput').value.trim().split('\n').filter(s => s.trim());
    const region = document.getElementById('sellerRegion').value;
    const tool = document.getElementById('sellerTool').value;

    if (sellers.length === 0) {
      showStatus("⚠️ Enter at least one Seller ID", "warning");
      return;
    }

    sellers.forEach(sellerId => {
      let url;
      if (tool === 'paragon') {
        const paragonDomain = region === 'na' ? 'paragon-na' : region === 'eu' ? 'paragon-eu' : 'paragon-fe';
        url = `https://${paragonDomain}.amazon.com/hz/search?searchQuery=${encodeURIComponent(sellerId.trim())}&contentType=CASE&sortField=creationDate&sortOrder=desc#`;
      } else {
        const searchType = document.getElementById('brandSearchType').value;
        const urls = {
          'name': `https://internal.brandregistry.amazon.dev/search/q?name=${encodeURIComponent(sellerId.trim())}`,
          'id': `https://internal.brandregistry.amazon.dev/search/q?id=${encodeURIComponent(sellerId.trim())}`,
          'mcid': `https://internal.brandregistry.amazon.dev/search/q?mcid=${encodeURIComponent(sellerId.trim())}`,
          'cid': `https://internal.brandregistry.amazon.dev/search/q?cid=${encodeURIComponent(sellerId.trim())}`,
          'companyCode': `https://internal.brandregistry.amazon.dev/search/q?companyCode=${encodeURIComponent(sellerId.trim())}`,
          'partnerAccountId': `https://internal.brandregistry.amazon.dev/search/q?partnerAccountId=${encodeURIComponent(sellerId.trim())}`,
          'trademarkNumber': `https://internal.brandregistry.amazon.dev/search/q?trademarkNumber=${encodeURIComponent(sellerId.trim())}&trademarkRegistrationOffice=USPTO`
        };
        url = urls[searchType];
      }
      chrome.tabs.create({ url, active: false });
    });

    showStatus(`✅ Opened ${sellers.length} seller(s)`, "success");
  });

  // Order/ASIN Section
  updateOrderDomainOptions();
  document.getElementById('orderRegion').addEventListener('change', updateOrderDomainOptions);

  document.getElementById("orderLaunch").addEventListener("click", () => {
    const inputs = document.getElementById('orderInput').value.trim().split('\n').filter(i => i.trim());
    const domain = document.getElementById('orderDomain').value;
    const type = document.getElementById('orderType').value;

    if (inputs.length === 0) {
      showStatus("⚠️ Enter at least one Order ID or ASIN", "warning");
      return;
    }

    inputs.forEach(input => {
      let url;
      if (type === 'order') {
        url = `https://sellercentral.amazon.${domain}/orders-v3/order/${encodeURIComponent(input.trim())}`;
      } else {
        url = `https://sellercentral.amazon.com/orders-v3/search?page=1&q=${encodeURIComponent(input.trim())}&qt=asin`;
      }
      chrome.tabs.create({ url, active: false });
    });

    showStatus(`✅ Opened ${inputs.length} item(s)`, "success");
  });

  // SIM Search Section
  document.getElementById('simSearchType').addEventListener('change', function() {
    document.getElementById('simKeywords').style.display = (this.value === 'requester' || this.value === 'assignee') ? 'block' : 'none';
  });

  document.getElementById("simLaunch").addEventListener("click", () => {
    const searchTerm = document.getElementById('simInput').value.trim();
    const searchType = document.getElementById('simSearchType').value;
    const keywords = document.getElementById('simKeywords').value.trim();

    if (!searchTerm) {
      showStatus("⚠️ Enter a search term", "warning");
      return;
    }

    let url;
    if (searchType === 'requester') {
      let query = `requester%3A(${encodeURIComponent(searchTerm)})`;
      if (keywords) query += `+(${encodeURIComponent(keywords)})`;
      url = `https://issues.amazon.com/issues/search?q=${query}&sort=lastUpdatedConversationDate+desc&selectedDocument=0d06fd54-6c6a-4392-aaa1-70d4bff357e1`;
    } else if (searchType === 'assignee') {
      let query = `assignee%3A(${encodeURIComponent(searchTerm)})`;
      if (keywords) query += `+(${encodeURIComponent(keywords)})`;
      url = `https://issues.amazon.com/issues/search?q=${query}&sort=lastUpdatedConversationDate+desc&selectedDocument=0d06fd54-6c6a-4392-aaa1-70d4bff357e1`;
    } else {
      url = `https://issues.amazon.com/issues/search?q=(${encodeURIComponent(searchTerm)})&sort=lastUpdatedConversationDate+desc&selectedDocument=0d06fd54-6c6a-4392-aaa1-70d4bff357e1`;
    }
    chrome.tabs.create({ url, active: false });
    showStatus("✅ Opened SIM search", "success");
  });

  // Physical ID Section
  document.getElementById("physicalLaunch").addEventListener("click", () => {
    const physicalIds = document.getElementById('physicalInput').value.trim().split('\n').filter(id => id.trim());

    if (physicalIds.length === 0) {
      showStatus("⚠️ Enter at least one Physical ID", "warning");
      return;
    }

    const trimmedIds = physicalIds.map(id => encodeURIComponent(id.trim()));
    const url = `https://console.harmony.a2z.com/media-central/image-lookup?physicalIds=${trimmedIds.join(',')}`;
    chrome.tabs.create({ url, active: false });
    showStatus(`✅ Opened ${physicalIds.length} Physical ID(s)`, "success");
  });
});
