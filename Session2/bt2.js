let bookName = prompt();
let author = prompt();
let publicYear = prompt();

publicYear = Number;
let currentYear = new Date.getFulyear();

if (publicYear === currentYear) {
  console.log("Đây là sách mới!");
} else if (currentYear - publicYear <= 5) {
  console.log("Sách khá mới");
} else {
  console.log("Sách đã cũ");
}
