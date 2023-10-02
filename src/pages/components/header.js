const userLogin = getDataFromLocalStorage("userLogin");
const featureElement = document.querySelector("#navbar-feature");

if (userLogin) {
  featureElement.innerHTML = ` <a href="/src/pages/customer/cart/index.html"><i class="fa-solid fa-cart-plus fa-beat feature"
  ></i> ( 0 )</a
  >
<a href="/src/pages/customer/accounts/index.html"><i class="fa-solid fa-user fa-beat feature"></i> </a>
<button class="btn btn-outline-success" onclick="logOut()">Log out</button>
`;
} else {
  featureElement.innerHTML = `
  <a
  href="/src/pages/auth/login/index.html"
  class="btn btn-outline-success"
  >Login</a
>
<a
  href="/src/pages/auth/register/index.html"
  class="btn btn-outline-info"
  >Register</a
>
`;
}
function logOut() {
  localStorage.removeItem("userLogin");
  window.location.href = "/src/pages/auth/login/index.html";
}
