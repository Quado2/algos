const cards = ["Jack",8,2,6,"King",5,3,"Queen","Jack","King","Queen","Queen","King","Jack","Jack","King","Queen","Queen","King","Jack"];
function sortCard(cards) {
  const stringRank = {
    Jack: 1,
    Queen: 2,
    King: 3,
  };
  const sortedCard = cards.sort((a, b) => {
    if (typeof a === "string" && typeof b === "number") {
      return 1;
    }
    if (typeof a === "number" && typeof b === "string") {
      return -1;
    }
    if (typeof a === "string" && typeof b === "string") {
      a = stringRank[a];
      b = stringRank[b];
      return a - b;
    }
    return a - b
  });
  return sortedCard
}
console.log(sortCard(cards));
