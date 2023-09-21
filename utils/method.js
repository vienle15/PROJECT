function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setDataFromLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
