const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1",
];
const reportTopPerformers = (minPerformance, players) => {
  let total = 0;

  players.forEach((player) => {
    const parts = player.split(" - ");
    const performance = Number(parts[2]) + Number(parts[3]);

    if (performance >= minPerformance) {
      console.log(parts[0] + ": " + performance);
      total += performance;
    }
  });

  console.log("Tổng hiệu suất: " + total);
  return total;
};
