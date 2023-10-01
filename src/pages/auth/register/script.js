function handleAdd(event) {
  event.preventDefault();
  // b1 lấy thông tin từ local trả về mảng
  const accountDB = JSON.parse(localStorage.getItem("accounts")) || [];
  // b2 lấy thông tin từ mấy ô input
  const nameElement = document.getElementById("name");
  const addressElement = document.getElementById("address");
  const emailElement = document.getElementById("email");
  const phoneElement = document.getElementById("phone");
  const passwordElement = document.getElementById("password");
  const repeatPasswordElement = document.getElementById("password-repeat");

  let name = nameElement.value;
  let address = addressElement.value;
  let email = emailElement.value;
  let phone = phoneElement.value;
  let password = passwordElement.value;
  let repeatPassword = repeatPasswordElement.value;
  //  tạo 1 object để lưu trữ thông tin
  const account = {
    name: name,
    address: address,
    email: email,
    phone: phone,
    password: password,
    repeatPassword: repeatPassword,
    role: "user",
  };
  const error = checkError(account); // { } --> chứa thông tin lỗi
  renderError(error); // hiển thị loại
  if (error.isError) {
    return;
  }
  console.log(account, accountDB);
  document.getElementById("myForm").reset();
  // b4 đẩy thông tin lên lại mảng trả về từ bước 1

  // check trung lap
  let isExist = false;
  for (const user of accountDB) {
    if (user.email === account.email) {
      isExist = true;
      break;
    }
  }
  if (!isExist) {
    // Ok --> đẩy lên local

    delete account.repeatPassword;
    accountDB.push(account);

    localStorage.setItem("accounts", JSON.stringify(accountDB));
    // Điều hướng login
    window.location.pathname = "/src/pages/auth/login/index.html";
  } else {
    error.isError = true;
    error.msgEmail =
      "Email đã tồn tại, vui lòng đăng nhập hoặc đăng ký email khác";
    console.log(1111, error);
    renderError(error);
  }
}

function checkError(account) {
  const error = {
    isError: false,
    msgName: "",
    msgAddress: "",
    msgEmail: "",
    msgPhone: "",
    msgPassword: "",
    msgRepeatPassword: "",
  };

  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  if (account.password !== account.repeatPassword) {
    error.isError = true;
    error.msgRepeatPassword = "Mật khẩu không trùng khớp, vui lòng nhập lại";
  }
  if (!account.password) {
    error.isError = true;
    error.msgPassword = "Mật khẩu không được để trống";
  }
  if (!account.name) {
    error.isError = true;
    error.msgName = "Tên không được để trống";
  }
  if (!account.phone) {
    error.isError = true;
    error.msgPhone = "Số điện thoại không được để trống";
  }

  if (!account.phone.match(regexPhoneNumber)) {
    error.isError = true;
    error.msgPhone = "Sai định dạng sđt Việt Nam";
  }
  if (!account.address) {
    error.isError = true;
    error.msgAddress = "Địa chỉ không được để trống";
  }

  if (!account.email.match(validRegex)) {
    error.isError = true;
    error.msgEmail = "Email không đúng định dạng";
    // document.getElementById("myForm").reset();
  }

  return error;
}

function renderError(error) {
  const errorEmailElement = document.querySelector("#error-email");
  const errorNameElement = document.querySelector("#error-name");
  const errorAddressElement = document.querySelector("#error-address");
  const errorPhoneElement = document.querySelector("#error-phone");

  const errorPasswordElement = document.querySelector("#error-password");
  const errorRepeatPasswordElement = document.querySelector(
    "#error-repeat-password"
  );

  errorEmailElement.textContent = error.msgEmail;
  errorPasswordElement.textContent = error.msgPassword;
  errorRepeatPasswordElement.textContent = error.msgRepeatPassword;
  errorNameElement.textContent = error.msgName;
  errorAddressElement.textContent = error.msgAddress;
  errorPhoneElement.textContent = error.msgPhone;
}
