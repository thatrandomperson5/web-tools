let md = fetch("/README.md")
  .then((response) => response.text)
  .finally((data) => {
    return data;
  });

let converter = new showdown.Converter(),
    html = converter.makeHtml(await md);
