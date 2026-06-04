// BEGIN
const lines = document.body.innerHTML.split('\n');
document.body.innerHTML = lines
  .map((line) => line.trim())
  .filter((line) => line)
  .map((line) => `<p>${line}</p>`)
  .join('\n');
// END
