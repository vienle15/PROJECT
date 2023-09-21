function handleUser() {
  const userDB = JSON.parse(localStorage.getItem("accounts")) || [];
  console.log("1", userDB);

  let listUser = document.querySelector("#tbody");
  let content = "";
  userDB.forEach((element, index) => {
    content += `  <tr>
      <td class="pl-4">${index + 1}</td>
      <td>
        <h5 class="font-medium mb-0">${element.name}</h5>
      </td>
      <td>
        <span class="text-muted">${element.address}</span
        ><br />
      </td>
      <td>
        <span class="text-muted">${element.email}</span
        ><br />
        
      </td>
      <td>
        <span class="text-muted">${element.phone}</span><br />
        
      </td>
      <td>
        <select
          class="form-control category-select"
          id="exampleFormControlSelect1"
        >
        <option>${element.role}</option>
          <option>${element.role == "Admin" ? "User" : "Admin"}</option>
        </select>
      </td>
      <td>
        <button
          onclick="blockUser(${index})"
          type="button"
  
          class="btn btn-outline-info btn-circle btn-lg btn-circle ${
            element.isBlocked ? "blocked" : ""
          }"
        >
          <i class="fa fa-key"></i>
        </button>
        <button
          id = "deleteBtn"
          onclick="deleteUser(${index})"
          type="button"
          class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        >
          <i class="fa fa-trash"></i>
        </button>
        <button
          onclick="editUser()"
          type="button"
          class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
        >
          <i class="fa fa-edit"></i>
        </button>
      </td>
    </tr>`;
  });
  listUser.innerHTML = content;
}

function blockUser(index) {
  const userDB = JSON.parse(localStorage.getItem("accounts")) || [];
  const userOfIndex = userDB[index];
  console.log("userOfIndex", userOfIndex);

  userOfIndex.isBlocked = !userOfIndex.isBlocked;
  userDB.splice(index, 1, userOfIndex);
  localStorage.setItem("accounts", JSON.stringify(userDB));
  handleUser();
}

handleUser();
const userDB = JSON.parse(localStorage.getItem("accounts")) || [];

function deleteUser(index) {
  console.log("index", index);
  userDB.splice(index, 1);
  localStorage.setItem("accounts", JSON.stringify(userDB));
  handleUser();
}
function filterUser() {}
