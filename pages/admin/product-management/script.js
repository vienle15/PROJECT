const btnAddEdit = document.querySelector("#btn-add-edit");
const productDB = JSON.parse(localStorage.getItem("productList")) || [];
function handleAddEdit(index) {
  console.log(111111, index);
  // Lấy dữ liệu từ localStorage
  // truy vấn tới các ô input
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const imageInput = document.getElementById("img").value.slice(12);
  const quantityInput = document.getElementById("quantity");
  const codeInput = document.getElementById("code");
  const idInput = document.getElementById("id");
  const sizeInput = document.getElementById("size");

  // Lấy giá trị của các ô input
  console.log(imageInput);
  const name = nameInput.value;
  const price = priceInput.value;
  // const image = imageInput.value;
  const size = sizeInput.value;
  const quantity = quantityInput.value;
  const code = codeInput.value;
  const id = idInput.value;

  //tạo 1 object lưu lại thông tin
  const product = {
    productImg: "images/" + imageInput,
    productID: id,
    productCode: code,
    productName: name,
    productPrice: price,
    productSize: size,
    productQuantity: quantity,
  };

  index == undefined
    ? productDB.push(product)
    : productDB.splice(index, 1, product);
  console.log(productDB);

  // Lưu dữ liệu vào localStorage

  localStorage.setItem("productList", JSON.stringify(productDB));
  renderProduct(productDB);
}

// renderProduct(productDB);
function renderProduct(productDB) {
  let renderTbody = document.getElementById("tbodyEdit");
  let content = "";
  productDB.forEach((product, index) => {
    // Thay đổi nội dung văn bản của hàng HTML
    content += `
      <tr>
          <td class="text-nowrap align-middle">
            <div class="d-flex justify-content-center">
              <img src="../${product.productImg}" alt="" class="img-fluid" />
             
            </div>
          </td>
          <td class="text-nowrap align-middle">${product.productID}</td>
          <td class="text-nowrap align-middle">${product.productCode}</td>
          <td class="text-nowrap align-middle max-width">${product.productName}</td>
          <td class="text-nowrap align-middle">${product.productPrice}</td>
          <td class="text-center align-middle">${product.productSize}</td>
          <td class="text-center align-middle">${product.productQuantity}</td>
          <td class="text-center align-middle">
            <div class="btn-group align-top">
              <button
                onclick = "editProduct(${index})"
                class="btn btn-sm btn-outline-secondary badge"
                type="button"
                data-toggle="modal"
                data-target="#user-form-modal"
              >
                Edit
              </button>
              <button
                onclick = "deleteProduct(${index})"
                class="btn btn-sm btn-outline-secondary badge"
                type="button"
              >
                Delete
              </button>
            </div>
          </td>
          </tr>
        `;
  });
  renderTbody.innerHTML = content;
}
renderProduct(productDB);

function editProduct(index) {
  btnAddEdit.setAttribute("onclick", `handleAddEdit(${index})`);
  const product = productDB[index];

  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const quantityInput = document.getElementById("quantity");
  const codeInput = document.getElementById("code");
  const idInput = document.getElementById("id");
  const sizeInput = document.getElementById("size");

  nameInput.value = product.productName;
  priceInput.value = product.productPrice;
  quantityInput.value = product.productQuantity;
  codeInput.value = product.productCode;
  idInput.value = product.productID;
  idInput.disabled = true;
  sizeInput.value = product.productSize;
}

function addProduct() {
  const nameInput = document.getElementById("name");
  const priceInput = document.getElementById("price");
  const quantityInput = document.getElementById("quantity");
  const codeInput = document.getElementById("code");
  const idInput = document.getElementById("id");
  const sizeInput = document.getElementById("size");

  nameInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";
  codeInput.value = "";
  idInput.value = "";
  idInput.disabled = false;
  sizeInput.value = "";
}

function handleCloseForm() {
  btnAddEdit.setAttribute("onclick", `handleAddEdit()`);
}
function deleteProduct(index) {
  productDB.splice(index, 1);
  localStorage.setItem("productList", JSON.stringify(productDB));
  renderProduct(productDB);
}
// renderProduct(productDB);
