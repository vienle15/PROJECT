const accountsObject = JSON.parse(localStorage.getItem("accounts")) || [];
const accountsLogin = JSON.parse(localStorage.getItem("userLogin")) || [];

function renderModalEdit() {
  const nameInput = document.querySelector("#new-name");
  const phoneInput = document.querySelector("#new-phone");
  const addressInput = document.querySelector("#new-address");
  const passwordInput = document.querySelector("#new-password");

  const valueFindEmail = accountsObject.filter((element) => {
    return element.email == accountsLogin.email;
  });
  console.log(valueFindEmail);

  // Lấy giá trị của các ô input show ra
  nameInput.value = valueFindEmail[0].name;
  phoneInput.value = valueFindEmail[0].phone;
  addressInput.value = valueFindEmail[0].address;
  passwordInput.value = valueFindEmail[0].password;
}
function confirmUpdate() {
  // Lấy các ô input của modal
  const nameInput = document.querySelector("#new-name");
  const phoneInput = document.querySelector("#new-phone");
  const addressInput = document.querySelector("#new-address");
  const passwordInput = document.querySelector("#new-password");

  accountsObject.forEach((element) => {
    if (element.email == accountsLogin.email) {
      const userAfterUpdate = {
        email: accountsLogin.email,
        name: nameInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
      };

      localStorage.setItem("userLogin", JSON.stringify(userAfterUpdate));

      (element.name = nameInput.value),
        (element.phone = phoneInput.value),
        (element.address = addressInput.value),
        (element.password = passwordInput.value);
    }
  });

  //   accountsObject.push(userAfterUpdate);
  localStorage.setItem("accounts", JSON.stringify(accountsObject));

  console.log("accountsObject", accountsObject);
  renderInfoUser();
}

function renderInfoUser() {
  const renderInfoUserLogin = JSON.parse(localStorage.getItem("userLogin"));
  const renderTarget = document.querySelector(".osahan-user-media-body");
  renderTarget.innerHTML = ` 
  <h6 class="mb-2">Tên: ${renderInfoUserLogin.name}</h6>
  <p class="mb-1">Số điện thoại: ${renderInfoUserLogin.phone}</p>
  <p id="email-current-acc">Email:  ${renderInfoUserLogin.email}</p>
  <p>Địa chỉ: ${renderInfoUserLogin.address}</p>`;
}
renderInfoUser();

function editProfile() {}
