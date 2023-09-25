function handleLogin(event) {
  event.preventDefault();
  const userEmailElement = document.getElementById("checklogin");
  const userPasswordElement = document.getElementById("checkpassword");

  let userEmail = userEmailElement.value;
  let userPassword = userPasswordElement.value;
  document.getElementById("formMy").reset();

  const accountDB = JSON.parse(localStorage.getItem("accounts")) || [];
  let check = false;
  for (const userLoginInfo of accountDB) {
    if (
      userLoginInfo.email == userEmail &&
      userLoginInfo.password == userPassword
    ) {
      if (userLoginInfo.isBlocked) {
        alert("Tài khoản bị khoá, bom hàng quá nhiều");
        return;
      }
      let userInfoDB = JSON.parse(localStorage.getItem("usersLogin"));
      userInfoDB = userLoginInfo;
      userInfoDB.password = "";
      localStorage.setItem("userLogin", JSON.stringify(userInfoDB));

      window.location.pathname = "index.html";
      check = true;
    }
  }
  if (!check) {
    alert("Sai email hoặc mật khẩu");
  }
}
