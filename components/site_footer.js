class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <!-- <small><a href="#start">Início</a></small> -->
        <p>© 2026 Hedson Lopes.</p>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);

