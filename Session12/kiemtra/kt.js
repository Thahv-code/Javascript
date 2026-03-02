let students = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" },
];

const femaleStudents = students.filter((student) => student.gender === "Nữ").sort((a, b) => b.score - a.score);
console.log(femaleStudents);

let goodStudents = students.filter((student) => student.score >= 5.0).map((c) => c.name);
console.log(goodStudents);

