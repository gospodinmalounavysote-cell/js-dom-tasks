import camelCase from 'lodash/camelCase';

// BEGIN
export default (document) => {
  const elements = document.body.getElementsByTagName('*');

  [...elements].forEach((element) => {
    [...element.classList].forEach((className) => {
      const normalized = camelCase(className);
      if (normalized !== className) {
        element.classList.replace(className, normalized);
      }
    });
  });
};
// END
