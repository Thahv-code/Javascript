let tosoyeucauduocsyli = 0;
let soyeucauduocdattruocthanhcong = 0;
let soyeucaubituchoi = 0;
let soyeucauchoxetduyet = 0;
while (true) {
  let tieptuc = prompt(
    "Có yêu cầu đặt mượn trước mới không? (có/không)",
  ).toLowerCase();
  if (tieptuc == "không") {
    console.log(" kết thúc ca, in báo cáo tổng hợp");
    break;
  } else {
    let name = prompt("nhập tên bạn đọc");
    let tensach = prompt("nhập tên sách");
    let day = Number(prompt("nhập số ngày dự kiến chờ"));
    while (day < 1) {
      console.log("lỗi vui lòng nhập lại");
      day = Number(prompt("nhập lại số ngày chờ "));
    }
    let uutien = prompt("vui lòng nhập thứ tự ưu tiên");
    while (uutien < 1 || uutien > 3) {
      uutien = prompt("chỉ nhập từ 1-3");
    }
    if (day > 45) {
      console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
      soyeucaubituchoi++;
    } else if (uutien == 3) {
      console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
      soyeucauduocdattruocthanhcong++;
    } else if (uutien == 2 && day <= 30) {
      console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
      soyeucauduocdattruocthanhcong++;
    } else if (uutien == 1 && day <= 21) {
      console.log("Đặt trước thành công");
      soyeucauduocdattruocthanhcong++;
    } else {
      console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
      soyeucauchoxetduyet++;
    }
    tosoyeucauduocsyli++;
  }
}
console.log("tổng yêu cầu được xử lý :" + tosoyeucauduocsyli);
console.log("tổng yêu cầu bị từ chối :" + soyeucaubituchoi);
console.log("thành công" + soyeucauduocdattruocthanhcong);
console.log("chờ xét duyệt" + soyeucauchoxetduyet);
