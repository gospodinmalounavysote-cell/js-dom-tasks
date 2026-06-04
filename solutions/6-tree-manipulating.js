// BEGIN
export default (document) => {
  document.querySelectorAll('div').forEach((div) => {
    [...div.childNodes].forEach((node) => {
      if (node instanceof Text && node.textContent.trim()) {
        const paragraph = document.createElement('p');
        paragraph.textContent = node.textContent;
        node.replaceWith(paragraph);
      }
    });
  });
};
// END
