class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <nav>
          <h1 id="start">Hedson Lopes</h1>
        </nav>
        <nav class="navbar">
          <ul class="simple-ul">
            <li><a href="./" title="Click para visualizar meu portfólio">Portfolio</a></li>
            <li><a href="./stacks.html" title="Click para visualizar minhas stacks">Stacks</a></li>
            <!--<li><a href="./blog.html" title="Click para visualizar meu blog">Blog</a></li>-->
          </ul>
        </nav>
        <!--<site-navbar></site-navbar>-->
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);

