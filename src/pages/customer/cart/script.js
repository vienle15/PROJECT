function renderCart() {
  let userLogin = getDataFromLocalStorage("userLogin");
  let userAcccount = getDataFromLocalStorage("accounts");
  let accountCartInfo = userAcccount.filter(
    (element) => element.email === userLogin.email
  );
  console.log("3333", accountCartInfo);
  let cartResult = `  <div class="layout-inline row th">
  <div class="col col-pro">Product</div>
  <div class="col col-price align-center "> 
    Price
  </div>
  <div class="col col-qty align-center">QTY</div>
  <div class="col">VAT</div>
  <div class="col">Total</div>
</div>`;
  let cartTable = document.querySelector(".table");
  accountCartInfo[0].cart?.forEach((element) => {
    cartResult += `<div class="layout-inline row">
            
    <div class="col col-pro layout-inline">
      <img src="/src/assets/images/stan-smith.webp" alt="shoes" />
      <p>${element.productName}</p>
    </div>
    
    <div class="col col-price col-numeric align-center ">
      <p>${element.productPrice}</p>
    </div>

    <div class="col col-qty layout-inline">
      <button  class="qty qty-minus" onclick="_handleMinus(${element.productID})">-</button>
        <input type="numeric" value="${element.quantityNumber}" />
      <button class="qty qty-plus" onclick="_handlePlus(${element.productID})">+</button>
    </div>
    
    <div class="col col-vat col-numeric">
      <p>£2.95</p>
    </div>
    <div class="col col-total col-numeric">               <p> ${element.productPrice}</p>
    </div>
  </div>`;
  });
  cartTable.innerHTML = cartResult;
}
renderCart();

function _handlePlus(id) {
  console.log("id", id);
  let userLogin = getDataFromLocalStorage("userLogin");
  let userAcccount = getDataFromLocalStorage("accounts");
  let accountCartInfo = userAcccount.filter(
    (element) => element.email === userLogin.email
  );
  let cart = accountCartInfo[0].cart;
  console.log("cart", cart);
  let cartItem = cart.find((element) => element.productID === String(id));
  cartItem.quantityNumber++;
  cartItem.totalPrice = cartItem.quantityNumber * cartItem.productPrice;
  accountCartInfo[0].cart = cart;
  localStorage.setItem("accounts", JSON.stringify(userAcccount));
  renderCart();
}

function _handleMinus(id) {
  let userLogin = getDataFromLocalStorage("userLogin");
  let userAcccount = getDataFromLocalStorage("accounts");
  let accountCartInfo = userAcccount.filter(
    (element) => element.email === userLogin.email
  );
  let cart = accountCartInfo[0].cart;
  let cartItem = cart.find((element) => element.productID === String(id));
  // nếu số lượng = 0 thì xóa sản phẩm khỏi giỏ hàng
  if (cartItem.quantityNumber === 1) {
    cart = cart.filter((element) => element.productID !== String(id));
  } else {
    cartItem.quantityNumber--;
  }
  cartItem.totalPrice = cartItem.quantityNumber * cartItem.productPrice;
  accountCartInfo[0].cart = cart;
  localStorage.setItem("accounts", JSON.stringify(userAcccount));
  renderCart();
}
