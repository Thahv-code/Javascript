let bookName = prompt();
let personName = prompt();
let likingLevel = prompt();

likingLevel = Number();
if (likingLevel === 5 || likingLevel === 4) {
  console.log("đây là cuốn sách yêu thích của bạn hãy đọc ngay");
} else if (likingLevel === 3) {
  console.log("sách này khá ổn, có thể mượn");
} else if (likingLevel === 2 || likingLevel === 1) {
  console.log("sách này bạn có thể cân nhắc mượn lại sau");
}
