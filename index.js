function getMarkdown() {
  var md = fetch("./README.md");
  return md;
}
let converter = new showdown.Converter();
getMarkdown()
  .then((response) => response.text())
  .then((data) => {
    
    let html = converter.makeHtml(data);
    let cont = document.getElementById("readme").firstElementChild;
    cont.innerHTML = html;
});
