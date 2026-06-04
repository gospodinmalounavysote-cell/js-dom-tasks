import 'whatwg-fetch';

export default () => {
  // BEGIN
  document.querySelectorAll('input[data-autocomplete]').forEach((input) => {
    input.addEventListener('input', async (event) => {
      const { autocomplete, autocompleteName } = input.dataset;
      const list = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`);
      const url = new URL(autocomplete, window.location.origin);
      url.searchParams.set('search', event.target.value);

      const response = await fetch(url);
      const data = await response.json();
      const items = data.length > 0 ? data : ['Nothing'];

      list.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
    });
  });
  // END
};
