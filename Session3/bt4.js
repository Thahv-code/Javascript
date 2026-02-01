let tongSach = 0;
let sachMat = 0;
let sachHethang = 0;
let sachTonnhieu = 0;
let sachTonbinhthuong = 0;

while (true) {
  let tieptuc = prompt("Bạn muốn tiếp tục kiểm kê sách tiếp theo không ?");

  if (tieptuc === null || tieptuc.toLowerCase() === "Không") {
    break;
  }
  if (tieptuc.toLowerCase() !== "có") {
    alert("Vui lòng nhập lại!");
    continue;
  }

  let maSach;
  do {
    maSach = prompt("Nhập mã sách (không được để trống):");
  } while (maSach === null || maSach.trim() === "");

  let tenSach = prompt("Nhập tên sách:");

  let soLuong;
  do {
    soLuong = Number(prompt("Nhập số lượng thực tế (≥ 0):"));
  } while (isNaN(soLuong) || soLuong < 0);

  let tinhTrang;
  do {
    tinhTrang = Number(
      prompt("Nhập tình trạng sách:\n1 - Bình thường\n2 - Mất"),
    );
  } while (tinhTrang !== 1 && tinhTrang !== 2);

  tongSach++;
  if (tinhTrang === 2) {
    sachMat++;
    console.log("Sách mất :", maSach, tenSach);
  } else if (soLuong === 0) {
    sachHethang++;
    console.log("Sách hết hàng :", maSach, tenSach);
  } else if (soLuong >= 10) {
    sachTonnhieu++;
  } else {
    sachTonbinhthuong++;
    console.log("Sách bình thường :", maSach, tenSach);
  }

  console.log(`Tổng số sách đã kiểm kê : ${tongSach}`);
  console.log(`Số sách mất : ${sachMat}`);
  console.log(`Sách hết hàng : ${sachHethang}`);
}
