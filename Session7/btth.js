let players = [];
let goals = [];

const addPlayer = (name, goal) => {
  name = prompt(`Nhập tên cầu thủ`);
  goal = prompt("Nhập số bàn thắng cầu thủ");
  players.push(name);
  goals.push(parseInt(goal));
  console.log(`${name} có ${goal} bàn thắng`);
};

const showSquad = () => {
  console.log(players);
};

addPlayer();
showSquad();

const menu = () => {
  addPlayer();
};
