let nameBook = prompt("Nhập tên Sách: ");

let gerneBook = prompt("Nhập thể loại sách");

let statusBook = prompt("Nhập tình trạng sách");

if (gerneBook === "Khoa học" || gerneBook === "Lịch sử") {
    if (statusBook === "có sẵn") {
        console.log("Sách này còn");
    } else {
        console.log("Sách đã được mượn");
    }
} 
