let studentsName = ["Quý", "Nam", "Lan", "Hùng", "Nam"];
let studentReverse = [studentsName].reverse();

let name = "Lan";

if (studentReverse.includes(name)) {
    console.log("Tên Lan tồn tại trong mảng");
} else {
    console.log("Tên Lan không tồn tại trong mảng");
}

let index = studentReverse.indexOf(name);
console.log(`Vị trí đầu tiên: ${index}`);