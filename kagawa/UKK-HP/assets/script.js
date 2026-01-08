const articles = [
  {title:"太陽フレア観測装置の開発", file:"articles/article1.md"},
  {title:"気象観測機器コンテスト参加", file:"articles/article2.md"}
];

const container = document.getElementById("articles");

articles.forEach(a=>{
  fetch(a.file)
    .then(r=>r.text())
    .then(md=>{
      const snippet = md.split("\n").slice(0,6).join("\n");
      const card = document.createElement("div");
      card.className="card";
      card.innerHTML =
        marked.parse(snippet) +
        `<a href="article.html?file=${a.file}">続きを読む →</a>`;
      container.appendChild(card);
    });
});
