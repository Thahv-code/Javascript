let squads = [
  { id: 1, name: "Nguyen Van A", goal: 10, position: "FW" },
  { id: 2, name: "Le Thi B", goal: 5, position: "MF" },
  { id: 3, name: "Tran Van C", goal: 8, position: "DF" },
  { id: 4, name: "Pham Thi D", goal: 12, position: "FW" },
  { id: 5, name: "Hoang Van E", goal: 3, position: "GK" },
];

const renderData = (squads) => {
  squads.forEach((squads) => {
    console.log(
      `ID: ${squads.id}, Name: ${squads.name}, Goal: ${squads.goal}, Position: ${squads.position}`,
    );
  });
};

