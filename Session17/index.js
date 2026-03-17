localStorage.setItem("userName", "Nguyễn Văn B");
localStorage.setItem("age", 20);
localStorage.setItem("isMarried", true);

const users = [
    {
        id: 1,
        name: "Lê Văn A",
        isMarried: true,
    },
    {
        id: 2,
        name: "Lê Văn B",
        isMarried: false,
    },
];

console.log(JSON.stringify(users));

localStorage.setItem("users", JSON.stringify(users));

console.log("userName: ", localStorage.getItem("userName"));
console.log("age: ", localStorage.getItem("age"));
console.log("age: ", localStorage.getItem("ages"));

console.log("user đã chuyển đổi: ", JSON.parse(localStorage.getItem("users")));

localStorage.removeItem("age");
localStorage.removeItem("isMarried");

localStorage.