let n = prompt("Nhap so bat ki");

if (n % 2 === 0) {
  console.log("Số " + n + " là số chẵn");
} else {
  console.log("Số " + n + " là số lẻ");
}

if (n > 0) {
  console.log("Số " + n + " là số dương");
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
} else if (n < 0) {
  console.log("Số " + n + " là số âm");
} else {
  console.log("Giá trị n không hợp lệ để tạo dãy số");
}
