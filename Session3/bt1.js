let nameUse = prompt("ten nguoi muon");
let bookName = prompt("ten sach");
let borowDay = prompt("so ngay muon");
borowDay = Number;

if (borowDay > 14) {
    console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
  } else {
    console.log("Mượn thành công");
  }

