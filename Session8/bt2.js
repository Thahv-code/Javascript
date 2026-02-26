const playerNames = [
  "Messi",
  "Ronaldo",
  "Neymar",
  "De Bruyne",
  "Kante",
  "Van Dijk",
  "Alisson",
];
const getUpperNames = (playerNames) => {
  return playerNames.map((element) => element.toUpperCase());
};
let result = getUpperNames(playerNames);
console.log(result);
