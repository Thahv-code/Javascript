let tongLuotMuon = 0;
let tongTraMuon = 0;
let luotMuon = Number(prompt("Hôm nay có bao nhiêu lượt trả sách ?"));

while (luotMuon < 1 || isNaN(luotMuon)) {
  luotMuon = Number(prompt("Số lượt không hợp lệ, vui lòng nhập lại:"));
}

for (let i = 1; i <= luotMuon; i++) {
  console.log("--Nhập thông tin lượt trả sách--");
  let tenTra = prompt(`Lượt ${i} : Tên người mượn :`);
  let tenSach = prompt(`Lượt ${i} : Tên sách :`);
  let soNgaythucte = Number(prompt(`Lượt ${i} : Số ngày đã mượn thực tế :`));

  if (soNgaythucte <= 14) {
    console.log("Trả đúng hạn");
  } else if (soNgaythucte >= 15 && soNgaythucte <= 21) {
    console.log("Trả muộn + nhắc nhở");
    tongTraMuon++;
  } else if (soNgaythucte > 21) {
    console.log("Quá hạn và bạn cần lập biên bản");
    tongTraMuon++;
  }

  tongLuotMuon++;
}

console.log(`Tổng số lượt mượn trả sách: ${tongLuotMuon}`);
console.log(`Tổng số lượt trả muộn (số ngày > 15): ${tongTraMuon}`);
