const accountDB = JSON.parse(localStorage.getItem("userLogin")) || [];
const buttonLogin = document.getElementById("login-nosuccess");
const buttonNoLogin = document.getElementById("login-success");
// const loginElement = document.querySelector("#login-nosuccess");
console.log(accountDB);
// if (accountDB.length !== 0) {
//   loginElement.innerHTML = ` <button onclick="logOut()" class="sign-in">
//   <a href="../../pages/auth/login/index.html">User.logOut</a>
// </button>
// <button class="sign-in">
//   <a href="/pages/user/index.html">Profile</a>
// </button>`;
// } else {
//   loginElement.innerHTML = `<button class="sign-in">
//   <a href="../../pages/auth/login/index.html">Sign in</a>
// </button>
// <button class="sign-in">
//   <a href="../../pages/auth/register/index.html">Register</a>
// </button>`;
// }

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
// let productArray = getDataFromLocalStorage("productList");
// renderProduct(productArray);

// function handleSearch() {
//   let inputElement = document.querySelector("#input-search");

//   let getInput = inputElement.value;
//   // console.log("input", getInput);
//   const data = getDataFromLocalStorage("productList");

//   let resultData = data.filter((element) =>
//     element.productName.toLowerCase().includes(getInput)
//   );
//   console.log("resultData", resultData);

//   renderProduct(resultData);
// }

// let pListt = getDataFromLocalStorage("productList") || [];
function render() {
  let pListt = JSON.parse(localStorage.getItem("productList"));
  console.log("renderProduct", pListt);
  let rowElementt = document.querySelector(".row");
  console.log("fgggg", rowElementt);
  let results = "";
  pListt.forEach((element) => {
    results += `
    <div class="col-12 col-sm-6 col-md-3 item-product">
    <div class="card">
      <img
        src="${element.productImg}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${element.productName}</h5>
        <p class="card-text">Something about this shoes here!!!</p>
        <p class="card-text">Price:${element.productPrice}</p>
        <a
          onclick="navigationParam('/src/pages/customer/product-detail/index.html','id=${element.productID}')"
          class="btn btn-primary"
          >Detail</a
        >
        <a href="/src/pages/customer/Pay/pay.html" class="btn btn-primary">Buy</a>
      </div>
    </div>
  </div>`;
  });

  rowElementt.innerHTML = results;
}

render();
