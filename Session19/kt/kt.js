const form = document.getElementById("contact-form");
const tbody = document.getElementById("contact-tbody");
const btn = document.getElementById("submit-btn");

let contacts = [];
let editIndex = -1;

function loadInitialData() {
  const rows = tbody.querySelectorAll("tr");

  rows.forEach((row) => {
    const tds = row.querySelectorAll("td");
    contacts.push({
      name: tds[1].innerText,
      phone: tds[2].innerText,
      email: tds[3].innerText,
    });
  });

  render();
}

function render() {
  tbody.innerHTML = "";
  contacts.forEach((c, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${c.name}</td>
        <td>${c.phone}</td>
        <td>${c.email}</td>
        <td>
            <button class="btn-edit" onclick="editContact(${index})">Sửa</button>
            <button class="btn-delete" onclick="deleteContact(${index})">Xóa</button>
        </td>
      </tr>
    `;
  });
};


function deleteContact(index) {
  const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");

  if (confirmDelete) {
    contacts.splice(index, 1);
    alert("Xóa sản phẩm thành công!");
    render();
  }
}


loadInitialData();
