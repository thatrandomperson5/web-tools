async function getMarkdown() {
  var md = fetch("/README.md")
    .then((response) => response.text);
  return await md
}
let converter = new showdown.Converter();
getMarkdown().then((data) => {
  console.log(data)
  let html = converter.makeHtml(data);
  console.log(html)
});
