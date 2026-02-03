let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let numberId, numberName, numberQuantity;
let number = prompt(
  `Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay? `,
).trim();
for (let i = 0; i < number; i++) {
  while (true) {
    numberId = prompt(` Nhập mã sách:`);
    if (numberId !== "") {
      booksId.push(numberId);
      break;
    } else {
      alert(` Không được để trống`);
    }
  }
  while (true) {
    numberName = prompt(` Nhập tên sách:`);
    if (numberName !== "") {
      booksName.push(numberName);
      break;
    } else {
      alert(` Không được để trống`);
    }
  }
  numberQuantity = Number(prompt(` Nhập số lượng kho hiện tại:`));
  inventoryQuantity.push(numberQuantity);
}

console.log(` Danh sách sách cần xem xét bổ sung (${number} loại:)`);

for (
  let i = 0;
  i < booksId.length && i < booksName.length && i < inventoryQuantity.length;
  i++
) {
  console.log(
    `${i + 1}. Mã ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`,
  );
}

let count = 0;

for (let i = 0; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] <= 5) {
    count++;
  }
}
console.log(` Số sách có tồn kho <= 5 bản: ${count} loại`);

let checkQuantity = 0;

for (let i = 0; i < inventoryQuantity.length && i < booksId.length; i++) {
  if (inventoryQuantity[i] === 0) {
    console.log(` Các mã sách đã hết hàng(0 bản): ${booksId[i]}`);
  }
}
