class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <ul class="simple-ul">
          <li><a href="./" title="Click para visualizar meu portfólio">Portfolio</a></li>
          <li><a href="./stacks.html" title="Click para visualizar minhas stacks">Stacks</a></li>
          <li><a href="./blog.html">Artigos</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("site-navbar", SiteNavbar);

