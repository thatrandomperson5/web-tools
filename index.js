async function getMarkdown() {
  var md = fetch("/README.md")
    .then((response) => response.text)
    .finally((data) => {
      return data;
    });
  md = await md;
  return md;
}
let converter = new showdown.Converter(),  
    html = converter.makeHtml(getMarkdown());
