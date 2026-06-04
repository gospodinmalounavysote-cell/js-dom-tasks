// BEGIN
export default (documentElement) => {
  const paragraphs = documentElement.querySelectorAll('p');
  return Array.from(paragraphs, (p) => p.textContent.trim());
};
// END
