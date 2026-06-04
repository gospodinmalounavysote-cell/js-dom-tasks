export default () => {
  // BEGIN
  document.querySelectorAll('[data-bs-target]').forEach((tab) => {
    tab.addEventListener('click', () => {
      const row = tab.closest('.row');
      const tabContent = row?.querySelector('.tab-content');
      const targetPane = document.querySelector(tab.dataset.bsTarget);

      row?.querySelectorAll('[data-bs-target]').forEach((item) => {
        item.classList.remove('active');
      });
      tabContent?.querySelectorAll('.tab-pane').forEach((pane) => {
        pane.classList.remove('active');
      });

      tab.classList.add('active');
      targetPane?.classList.add('active');
    });
  });
  // END
};
