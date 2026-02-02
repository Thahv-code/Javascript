let soLanDangNhap = 0;

while (soLanDangNhap < 3) {
  let userName = prompt(`Nhập tài khoản: `);
  let password = prompt(`Nhập mật khẩu: `);

  if (userName == "admin" && password == "12345") {
    alert(`Đăng Nhập Thành Công `);
    break;
  }
  if (userName !== "admin" && password !== "12345") {
    alert(`Sai tài khoản và mật khẩu`);
    soLanDangNhap++;
  } else if (userName !== "admin") {
    alert(`Sai tài khoản`);
    soLanDangNhap++;
  } else if (password !== "12345") {
    alert(`Sai mật khẩu`);
    soLanDangNhap++;
  }

  if (soLanDangNhap == 3) {
    alert(`Tài khoản của bạn đã bị khóa`);
    break;
  }
}

let choice;

do {
  let menu = prompt(`
        ---Danh sách lựa chọn---\n
        1.Phân loại mã số sách.\n
        2.Thiết kế bản đồ kho sách.\n
        3.Dự toán phí bảo trì sách theo năm.\n
        4.Tìm mã số sách may mắn.\n
        5.Thoát chương trình.\n
        `);
  choice = Number(prompt(menu));
  switch (choice) {
    case 1:
      let tongSoSach = 0;
      let sachChan = 0;
      let sachLe = 0;
      let maSoSach;
      while (true) {
        maSoSach = Number(
          prompt(`Vui long nhập mã số sách (Nhập 0 để kết thúc) :`),
        );
        if (maSoSach == 0) {
          break;
        }
        tongSoSach++;
        if (maSoSach % 2 == 0) {
          sachChan++;
        } else {
          sachLe++;
        }
        console.log(`Tổng số mã sách đã nhập : ${tongSoSach}`);
        console.log(`Tổng số sách chẵn : ${sachChan}`);
        console.log(`Tổng số sách lẻ : ${sachLe}`);
      }
      break;
    case 2:
      let khoSach = "";
      let hang = Number(prompt("Nhập số hàng :"));
      let cot = Number(prompt("Nhập số cột :"));
      for (let i = 1; i <= hang; i++) {
        for (let j = 1; j <= cot; j++) {
          if (i === j) {
            khoSach += `[${i} - ${j}] (kệ ưu tiên)`;
          } else {
            khoSach += `[${i} - ${j}] `;
          }
        }
      }
      console.log(khoSach);
      break;
    case 3:
      let soSachHienCo = prompt(`Vui lòng nhập số sách hiện có: `);
      let phiBaoTri = prompt(`Vui lòng nhập phí bảo trì của 1 cuốn sách: `);
      let year = prompt(`Nhập vào số năm dự tính :`);

      for (let i = 1; i < year; i++) {
        let tongTien = soSachHienCo * phiBaoTri;
        console.log(`Năm ${year} : ${tongTien} VNĐ `);
        phiBaoTri *= 1.1;
      }
      break;
    case 4:
      let soMayMan = Number(prompt("nhập vào số may mắn"));
      let count = 0;
      console.log(`số may mắn là:\n`);
      for (let number = 1; number <= soMayMan; number++) {
        if (number % 3 == 0 && number % 5 !== 0) {
          console.log(`${number}`);
          count++;
        }
      }
      console.log(`Tổng số may mắn là ${count}`);
      break;
    case 5:
      alert(`Đăng xuất tài khoản`);
      break;
    default:
      alert(`Vui lòng nhập số từ 1 - 5`);
      break;
  }
} while (choice != 5);
