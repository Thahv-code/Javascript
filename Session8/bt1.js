const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

const displayPlayers = (players) => {
  players.forEach((element) => {
    console.log(element);
  });
};

displayPlayers(players);
