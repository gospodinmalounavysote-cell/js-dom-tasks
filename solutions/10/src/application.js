import escapeHtml from 'escape-html';

// BEGIN
export default () => {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = escapeHtml(form.elements.email.value);
    const name = escapeHtml(form.elements.name.value);
    const comment = escapeHtml(form.elements.comment.value);

    form.outerHTML = `
      <div>
        <p>Feedback has been sent</p>
        <div>Email: ${email}</div>
        <div>Name: ${name}</div>
        <div>Comment: ${comment}</div>
      </div>
    `;
  });
};
// END
