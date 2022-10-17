function getMarkdown() {
  var md = fetch("/README.md")
  return md
}
let converter = new showdown.Converter();
getMarkdown()
  .then((response) => response.text())
  .then((data) => {
    console.log(data)
    let html = converter.makeHtml(data);
    console.log(html)
});
