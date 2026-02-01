let soLanThanhcong = 0;
let soLanthatbai = 0;
while (true) {
  let giaHan = prompt("Có yêu cầu gia hạn mới không ?(có / không)");

  if (giaHan === null || giaHan.toLowerCase() === "Không") {
    alert("Kết thúc chương trình ");
    break;
  }
  if (giaHan.toLowerCase() !== "có") {
    alert("Vui lòng nhập có hoặc không !");
    continue;
  }

  let tenBandoc = prompt("Nhập tên bạn đọc :");
  let tenSach = prompt("Nhập tên sách :");

  let soNgaydamuon = Number(prompt("Nhập số ngày đã mượn hiện tại :"));
  let soNgaygiahan = Number(prompt("Nhập số ngày đã gia hạn  :"));

  if (
    soNgaydamuon < 1 ||
    soNgaygiahan < 1 ||
    isNaN(soNgaydamuon) ||
    isNaN(soNgaygiahan)
  ) {
    alert("Dữ liệu không hợp lệ!");
    soLanthatbai++;
    continue;
  }

  let tongSongay = soNgaydamuon + soNgaygiahan;
  if (tongSongay > 60) {
    alert("Không được gia hạn : Tổng thời gian vượt quá 60 ngày tối đa");
    soLanthatbai++;
  } else if (soNgaydamuon > 45) {
    alert("Không được gia hạn : Đã mượn quá lâu (>45 ngày");
  } else {
    alert("Gia hạn thành công");
    soLanThanhcong++;
  }
}

console.log("Số lần gia hạn thành công :" + soLanThanhcong);
console.log(`Số lần gia hạn không thành công : ${soLanthatbai}`);
