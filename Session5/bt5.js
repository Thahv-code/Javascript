let book = [];
let number = prompt(`Hôm nay có bao nhiêu cuốn sách bị trả muộn? `);
let bookName;
if (number > 0) {
  for (let i = 0; i < number; i++) {
    bookName = prompt(`Nhập tên cuốn sách thứ ${i + 1}:`);
    book.push(bookName);
  }
} else {
  console.log(`Vui lòng nhập số nguyên dương `);
}
console.log(` Tổng số sách bị trả muộn: ${number}`);
console.log(` Danh sách đã được trả:`);
for (let i = 0; i < book.length; i++) {
  console.log(` ${i + 1}: ${book[i]}`);
}

let count = 0;

for (let i = 0; i < book.length; i++) {
  if (book[i].length > 20) {
    count++;
  }
}
console.log(` Tổng số sách có tên dài hơn 20 ký tự: ${count}`);
