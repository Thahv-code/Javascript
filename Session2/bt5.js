let bookName = prompt();
let bookStatus = prompt();
let publicYear = prompt();
publicYear = Number;

if (bookStatus === "Có sẵn") {
  if (publicYear <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
  } else {
    console.log("Sách này có sẵn nhưng đã lâu năm");
  }
}
if (bookStatus === "Đã mượn") {
  if (publicYear <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại lần sau");
  } else {
    console.log("Sách này đã mượn và khá cũ");
  }
}
