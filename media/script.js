let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let resultsDiv = document.getElementById("results");
let body = document.getElementsByTagName("body")[0];

searchButton.onclick = () => {
let password = "4tmismzSsAngjmk6PPzbcUOvhdtx50bM5bjwch2JrJJ6gIGQlIN2WcWqG0tyJQhrm9l4WJK0IBSEzgWdC78KREgAoA2TpJctf9Um2uCKV2ogWNjnk1oQQtkfLhjGqj61myGAZvgf";
let searchQuery = searchInput.value;
let maxResults = 10000;
fetch(`https://Easy-Youtube-Search-API.gtjman.repl.co/${password}?q=${searchQuery}&max=${maxResults}`).then(res => res.json())
.then(data => {
    resultsDiv.innerHTML = ``;
    data.forEach(v => {
        let element = document.createElement("div")
        element.innerHTML = `<div id="video">
        <a href="${v.link}">
    <img src="${v.thumbnails.high.url}" draggable="false" alt="thumbnail" />
    <span>${v.title}</span>
    <p>${v.description}<p>
    </a>
  </div>`;
  resultsDiv.appendChild(element);
    })

})
}

searchInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchButton.click();
  }
});