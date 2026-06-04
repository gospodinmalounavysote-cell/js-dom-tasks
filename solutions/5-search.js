export default (document) => {
  // BEGIN
  const title = document.querySelector('.content h1').textContent.trim();
  const description = document.querySelector('.content .description').textContent.trim();
  const items = Array.from(document.querySelectorAll('.links > div'), (block) => ({
    title: block.querySelector('h2 a').textContent.trim(),
    description: block.querySelector('p').textContent.trim(),
  }));

  return { title, description, items };
  // END
};
