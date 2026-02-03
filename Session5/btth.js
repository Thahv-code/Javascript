let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice, newBook, borrowBooks, bookUpdate, bookOld, locationBook;

do {
  choice = Number(
    prompt(`=== QUẢN LÝ THƯ VIỆN 4.0 ===
    1. Xem danh sách
    2. Thêm sách
    3.Mượn sách(xóa)
    4. Sửa tên sách
    5. Sắp xếp kệ
    0. Thoát`),
  );
  switch (choice) {
    case 1:
      for (let i = 0; i < books.length; i++) {
        console.log(`${i + 1}. ${books[i]}`);
      }
      break;
    case 2:
      newBook = prompt(` Mời bạn nhập vào tên cuốn sách mới: `);
      books.push(newBook);
      console.log(` Đã thêm thành công`);
      break;
    case 3:
      borrowBooks = prompt(` Nhập tên cuốn sách muốn mượn`).trim();
      let found = false;
      for (let i = 0; i < books.length; i++) {
        if (i === books.indexOf(borrowBooks)) {
          books.splice(i, 1);
          console.log(` Đã cho mượn sách ${borrowBooks}`);
          found = true;
          break;
        }
      }
      if (!found) {
        console.log(` Không có sách này trong kho`);
      }
      break;
    case 4:
      bookOld = prompt(` Nhập tên sách cũ cần sửa`).trim();
      locationBook = false;
      for (let i = 0; i < books.length; i++) {
        if (i === books.indexOf(bookOld)) {
          bookUpdate = prompt(` Nhập tên sách mới:`).trim();
          books.splice(i, 1, bookUpdate);
          console.log(` Đã sửa thành công`);
          locationBook = true;
        }
      }
      if (!locationBook) {
        console.log(` Không tìm thấy cuốn sách cần sửa`);
      }
      break;
    case 5:
      books.sort();
      console.log(` Sách đã được sắp sếp`);
      console.log(` ${books}`);
      break;
    case 0:
      console.log(` Cảm ơn bạn đã sử dụng chương trình`);
      break;
    default:
      alert(` Không có lựa chọn này!!!`);
      break;
  }
} while (choice !== 0);
