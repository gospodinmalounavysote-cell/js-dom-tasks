export default () => {
  // BEGIN
  const button = document.getElementById('alert-generator');
  const alertsContainer = document.querySelector('.alerts');
  let counter = 0;

  button.addEventListener('click', () => {
    counter += 1;
    const alert = document.createElement('div');
    alert.className = 'alert alert-primary';
    alert.textContent = `Alert ${counter}`;
    alertsContainer.prepend(alert);
  });
  // END
};
