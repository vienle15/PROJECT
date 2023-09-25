const accountDB = JSON.parse(localStorage.getItem("userLogin")) || [];
const buttonLogin = document.getElementById("login-nosuccess");
const buttonNoLogin = document.getElementById("login-success");
const loginElement = document.querySelector("#login-nosuccess");
console.log(accountDB);
if (accountDB.length !== 0) {
  loginElement.innerHTML = ` <button onclick="logOut()" class="sign-in">
  <a href="../../pages/auth/login/index.html">User.logOut</a>
</button>
<button class="sign-in">
  <a href="/pages/user/index.html">Profile</a>
</button>`;
} else {
  loginElement.innerHTML = `<button class="sign-in">
  <a href="../../pages/auth/login/index.html">Sign in</a>
</button>
<button class="sign-in">
  <a href="../../pages/auth/register/index.html">Register</a>
</button>`;
}

function renderProduct(data) {
  let dataRender = document.querySelector(".render-stay");
  // console.log("dataRender", dataRender);
  dataRender.innerHTML = "";

  for (const product of data) {
    dataRender.innerHTML += `
      
      <div class="col-12 cold-md-6 col-lg-3">
      <div class="card">
      <img
        src="${product.productImg}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${product.productName}</h5>
        <p class="card-text">Giá:${product.productPrice}</p>
        <p class="card-text">Kích thước: ${product.productSize}</p>
        <p class="card-text">Số lượng: ${product.productQuantity}</p>
        <a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
  
        <a href="#" class="btn btn-primary">Mua ngay</a>
      </div>
      </div>
      </div>
    `;
  }
}
let productArray = getDataFromLocalStorage("productList");
renderProduct(productArray);

function handleSearch() {
  let inputElement = document.querySelector("#input-search");

  let getInput = inputElement.value;
  // console.log("input", getInput);
  const data = getDataFromLocalStorage("productList");

  let resultData = data.filter((element) =>
    element.productName.toLowerCase().includes(getInput)
  );
  console.log("resultData", resultData);

  renderProduct(resultData);
}
