function toggleTabBar() {
  const tabBar = document.getElementById('tabBar');
  const fab = document.getElementById('fabBtn');
  if (tabBar.style.display === 'flex') {
    tabBar.style.display = 'none';
    fab.style.display = 'flex';
    document.getElementById('dropdownB').style.display = 'none';
  } else {
    tabBar.style.display = 'flex';
    fab.style.display = 'none';
  }
}

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownB');
  dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
}

function refreshTab() {
  const active = document.querySelector('.tab-content:not([style*="display: none"]) iframe');
  if (active) active.src = active.src;
}

function showTab(tab) {
  document.getElementById('welcome').style.display = 'none';
  ['a', 'b', 'c'].forEach(t => {
    document.getElementById('tab-' + t).style.display = 'none';
  });
  document.getElementById('tab-' + tab).style.display = 'block';
  toggleTabBar();
}

function loadBPage(url) {
  if (url.includes('mail.cx')) {
    window.open(url, '_blank');
  } else {
    showTab('b');
    document.getElementById('b-frame').src = url;
  }
}

function loadInboxURL() {
  const url = document.getElementById('inbox-url').value.trim();
  if (url) {
    const fullUrl = url.startsWith('http') ? url : 'https://' + url;
    document.getElementById('iframe-c').src = fullUrl;
    document.getElementById('iframe-c').style.display = 'block';
    document.getElementById('default-msg').style.display = 'none';
  }
}