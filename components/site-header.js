class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <nav>
          <h1 id="start">Hedson Lopes</h1>
        </nav>
        <site-navbar></site-navbar>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);

