// Shared rendering helpers. Product data lives in products.js.

function formatPrice(p) {
  if (p.free || p.price === 0) return '<span class="price free">Free</span>';
  const amount = new Intl.NumberFormat(undefined, { style: "currency", currency: STORE.currency }).format(p.price);
  return `<span class="price">${amount}</span>`;
}

function coverHTML(p, badge = true) {
  const cat = CATEGORIES[p.category];
  const tag = badge && p.featured ? '<span class="badge">Popular</span>' : "";
  return `<div class="cover cover-${p.category}">${tag}<span>${cat.icon}</span></div>`;
}

function cardHTML(p) {
  return `
    <a class="card" href="product.html?id=${p.id}">
      ${coverHTML(p)}
      <div class="card-body">
        <span class="card-cat">${CATEGORIES[p.category].label}</span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        ${formatPrice(p)}
      </div>
    </a>`;
}

function renderLayout(activePage) {
  document.title = document.title ? `${document.title} · ${STORE.name}` : STORE.name;
  const link = (href, label, key) =>
    `<a href="${href}" class="${activePage === key ? "active" : ""}">${label}</a>`;

  document.getElementById("header").innerHTML = `
    <header class="site-header">
      <div class="container">
        <a class="logo" href="index.html">${STORE.name}<span>.</span></a>
        <nav class="nav">
          ${link("index.html", "Home", "home")}
          ${link("shop.html", "Shop", "shop")}
          ${link("about.html", "About", "about")}
        </nav>
      </div>
    </header>`;

  document.getElementById("footer").innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <span>© ${new Date().getFullYear()} ${STORE.name}. Instant digital downloads.</span>
        <span><a href="mailto:${STORE.contactEmail}">${STORE.contactEmail}</a></span>
      </div>
    </footer>`;
}
