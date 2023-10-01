function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setDataFromLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function navigationParam(url, param) {
  location.href = `${url}?${param}`;
}

const params = new URLSearchParams(document.location.search);
const id = params.get("id");

function callParam() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");

  return id;
}
