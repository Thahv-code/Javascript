let book = [];
let number = prompt(` Bạn muốn trả bao nhiêu cuốn sách`);
let bookName;
if (number > 0) {
  for (let i = 0; i < number; i++) {
    bookName = prompt(`Nhập tên cuốn sách thứ ${i + 1}:`);
    book.push(bookName);
  }
} else {
  console.log(`Vui lòng nhập số nguyên dương `);
}
console.log(` Tổng số sách đã được trả: ${number}`);
console.log(` Danh sách đã được trả:`);

for (let i = 0; i < book.length; i++) {
  console.log(` ${i + 1}: ${book[i]}`);
}
