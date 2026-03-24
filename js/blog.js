async function loadArticles() {

  const response = await fetch("data/articles.json");
  const articles = await response.json();

  const container = document.getElementById("articles-list");

  articles.forEach(article => {

    const div = document.createElement("div");

    div.classList.add("core-list");

    div.innerHTML = `
      <ul>
      <li>
      <a href="${article.url}">${article.title}</a>
      </li>
      </ul>
    `;

    container.appendChild(div);

  });

}

loadArticles();

