// let pList = getDataFromLocalStorage("productList");
// let rowElement = document.querySelector(".container");
// pList.forEach((element) => {
//   rowElement.innerHTML += `
//   <div class="row">
//   <div class="col-12 col-sm-6 col-md-3 item-product">
//     <div class="card">
//       <img
//         src="${element.productImg}"
//         class="card-img-top"
//         alt="..."
//       />
//       <div class="card-body">
//         <h5 class="card-title">${element.productName}</h5>
//         <p class="card-text">Something about this shoes here!!!</p>
//         <p class="card-text">Price:${element.productPrice}</p>
//         <a
//           onclick="navigationParam('/src/pages/customer/product-detail/index.html','${element.productID}')"
//           class="btn btn-primary"
//           >Detail</a
//         >
//         <a href="#" class="btn btn-primary">Buy</a>
//       </div>
//     </div>
//   </div>
// </div>

//   `;
// });

function render() {
  let pList = getDataFromLocalStorage("productList") || [];
  let rowElement = document.querySelector(".row");
  let result = "";
  pList.forEach((element) => {
    result += `
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

  rowElement.innerHTML = result;
}

render();
