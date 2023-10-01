// $(".visibility-cart").on("click", function () {
//   var $btn = $(this);
//   var $cart = $(".cart");
//   console.log($btn);

//   if ($btn.hasClass("is-open")) {
//     $btn.removeClass("is-open");
//     $btn.text("O");
//     $cart.removeClass("is-open");
//     $cart.addClass("is-closed");
//     $btn.addClass("is-closed");
//   } else {
//     $btn.addClass("is-open");
//     $btn.text("X");
//     $cart.addClass("is-open");
//     $cart.removeClass("is-closed");
//     $btn.removeClass("is-closed");
//   }
// });

// // SHOPPING CART PLUS OR MINUS
// $("a.qty-minus").on("click", function (e) {
//   e.preventDefault();
//   var $this = $(this);
//   var $input = $this.closest("div").find("input");
//   var value = parseInt($input.val());

//   if (value > 1) {
//     value = value - 1;
//   } else {
//     value = 0;
//   }

//   $input.val(value);
// });

// $("a.qty-plus").on("click", function (e) {
//   e.preventDefault();
//   var $this = $(this);
//   var $input = $this.closest("div").find("input");
//   var value = parseInt($input.val());

//   if (value < 100) {
//     value = value + 1;
//   } else {
//     value = 100;
//   }

//   $input.val(value);
// });

// // RESTRICT INPUTS TO NUMBERS ONLY WITH A MIN OF 0 AND A MAX 100
// $("input").on("blur", function () {
//   var input = $(this);
//   var value = parseInt($(this).val());

//   if (value < 0 || isNaN(value)) {
//     input.val(0);
//   } else if (value > 100) {
//     input.val(100);
//   }
// });
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
      <button  class="qty qty-minus">-</button>
        <input type="numeric" value="1" />
      <button class="qty qty-plus">+</button>
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
