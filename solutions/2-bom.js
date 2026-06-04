// BEGIN
export default (url) => {
  window.location.assign(url);
  const version = navigator.appVersion.split(' ')[0];
  return `${navigator.appCodeName}/${version} ${url}`;
};
// END
