function change_image(image) {
  let container = document.getElementById("main-image");

  container.src = image.src;
}

document.addEventListener("DOMContentLoaded", function (event) {});
function showProduct() {
  let pList = getDataFromLocalStorage("productList") || [];
  let rowElement = document.querySelector(".card");

  let paramCall = callParam();
  console.log("11111111", paramCall);
  let elementById = pList.filter(
    (element) => element.productID == String(paramCall)
  );
  let elementParam = elementById[0];
  rowElement.innerHTML = ` <div class="container-fliud">
  <div class="wrapper row">
    <div class="preview col-md-6">
      <div class="preview-pic tab-content">
        <div class="tab-pane active" id="pic-1">
          <img src="/src/assets/images/stan-smith.webp" />
        </div>
        <div class="tab-pane" id="pic-2">
          <img src="/src/assets/images/stan-smith.webp" />
        </div>
        <div class="tab-pane" id="pic-3">
          <img src="/src/assets/images/stan-smith.webp" />
        </div>
        <div class="tab-pane" id="pic-4">
          <img src="/src/assets/images/stan-smith.webp" />
        </div>
        <div class="tab-pane" id="pic-5">
          <img src="/src/assets/images/stan-smith.webp" />
        </div>
      </div>
      <ul class="preview-thumbnail nav nav-tabs">
        <li class="active">
          <a data-target="#pic-1" data-toggle="tab"
            ><img src="/src/assets/images/stan-smith.webp"
          /></a>
        </li>
        <li>
          <a data-target="#pic-2" data-toggle="tab"
            ><img src="/src/assets/images/stan-smith.webp"
          /></a>
        </li>
        <li>
          <a data-target="#pic-3" data-toggle="tab"
            ><img src="/src/assets/images/stan-smith.webp"
          /></a>
        </li>
        <li>
          <a data-target="#pic-4" data-toggle="tab"
            ><img src="/src/assets/images/stan-smith.webp"
          /></a>
        </li>
        <li>
          <a data-target="#pic-5" data-toggle="tab"
            ><img src="/src/assets/images/stan-smith.webp"
          /></a>
        </li>
      </ul>
    </div>
    <div class="details col-md-6">
      <h3 class="product-title">${elementParam.productName}</h3>
      <div class="rating">
        <div class="stars">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <span class="review-no">41 reviews</span>
      </div>
      <p class="product-description">
        Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
        cubilia sem sem! Repudiandae et! Massa senectus enim minim
        sociosqu delectus posuere.
      </p>
      <h4 class="price">current price: <span>${elementParam.productPrice}</span></h4>
      <p class="vote">
        <strong>91%</strong> of buyers enjoyed this product!
        <strong>(87 votes)</strong>
      </p>
      <h5 class="sizes">
        sizes:
        <span class="size" data-toggle="tooltip" title="small">${elementParam.productSize[0]}</span>
        <span class="size" data-toggle="tooltip" title="medium">${elementParam.productSize[1]}</span>
        <span class="size" data-toggle="tooltip" title="large">${elementParam.productSize[2]}</span>
     
      </h5>
      <h5 class="colors">
        colors:
        <span
          class="color orange not-available"
          data-toggle="tooltip"
          title="Not In store"
        ></span>
        <span class="color green"></span>
        <span class="color blue"></span>
      </h5>
      <div class="action">
        <button class="add-to-cart btn btn-default" type="button" onclick="addCart('${elementParam.productID}')">
          add to cart
        </button>
        <button class="like btn btn-default" type="button">
          <span class="fa fa-heart"></span>
        </button>
      </div>
    </div>
  </div>
</div>`;
}
showProduct();
function addCart(productID) {
  console.log("222222", productID);
  let pList = getDataFromLocalStorage("productList") || [];
  let userLogin = getDataFromLocalStorage("userLogin");
  let accountDB = getDataFromLocalStorage("accounts");
  let cartInfo = [];
  for (let i = 0; i < pList.length; i++) {
    if (pList[i].productID === productID) {
      cartInfo.push(pList[i]);
      console.log(222, pList[i]);
      alert("Added To Cart");
    }
  }
  for (const accounts of accountDB) {
    if (accounts.email === userLogin.email) {
      accounts.cart = cartInfo;
    }
  }
  setDataFromLocalStorage("accounts", accountDB);
  console.log(333, cartInfo);
}
