const form = document.getElementById("product-form");
const tbody = document.getElementById("product-tbody");
const template = document.getElementById("row-template");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const code = document.getElementById("product-code").value.trim();
  const name = document.getElementById("product-name").value.trim();
  const price = document.getElementById("product-price").value.trim();
 

  const clone = template.content.cloneNode(true);

  const stt = tbody.children.length + 1;

  clone.querySelector(".stt").innerText = stt;
  clone.querySelector(".code").innerText = code;
  clone.querySelector(".name").innerText = name;
  clone.querySelector(".price").innerText =
    Number(price).toLocaleString("vi-VN") + " đ";

  tbody.appendChild(clone);

  form.reset();
  alert("Thêm sản phẩm thành công!");
});
