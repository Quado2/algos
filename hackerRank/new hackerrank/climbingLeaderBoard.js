/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Example



The ranked players will have ranks , , , and , respectively. If the player's scores are ,  and , their rankings after each game are ,  and . Return .

Function Description

Complete the climbingLeaderboard function in the editor below.

climbingLeaderboard has the following parameter(s):

int ranked[n]: the leaderboard scores
int player[m]: the player's scores
Returns

int[m]: the player's rank after each new score
Input Format

The first line contains an integer , the number of players on the leaderboard.
The next line contains  space-separated integers , the leaderboard scores in decreasing order.
The next line contains an integer, , the number games the player plays.
The last line contains  space-separated integers , the game scores.

Constraints

*/

function climbingLeaderboard(ranked, player) {
  const ranks = [];
  let currentRank = 1;
  for (let i = 0; i < ranked.length; i++) {
    if (i === 0) {
      ranks.push(ranked[i]);
      currentRank++;
    } else {
      if (ranked[i] !== ranked[i - 1]) {
        ranks.push(ranked[i]);
        currentRank++;
      }
    }
  }

  let lowestRank = ranks.length;

  let result = [];
  for (let i = 0; i < player.length; i++) {
    while (lowestRank > 0 && player[i] >= ranks[lowestRank - 1]) {
      lowestRank--;
    }
    result.push(lowestRank + 1);
  }
  return result;

  // let playerIndex = 0,
  //   rankedIndex = 0;
  // const playerCopy = [...player];
  // const sortedPlayer = playerCopy.sort((a, b) => b - a);
  // console.log(sortedPlayer, player);
  // const finalRanks = [];

  // while (rankedIndex < ranked.length && playerIndex < player.length) {
  //   if (sortedPlayer[playerIndex] >= ranked[rankedIndex]) {
  //     ranks[sortedPlayer[playerIndex]] = currentRank;

  //     playerIndex++;
  //   } else {
  //     if (
  //       rankedIndex === 0 ||
  //       ranked[rankedIndex] !== ranked[rankedIndex - 1]
  //     ) {
  //       currentRank++;
  //     }
  //     rankedIndex++;
  //   }
  // }
  // if (playerIndex < player.length) {
  //   for (let i = playerIndex; i < player.length; i++) {
  //     ranks[sortedPlayer[playerIndex]] = currentRank;
  //   }
  // }

  // for (let i = 0; i < player.length; i++) {
  //   finalRanks.push(ranks[player[i]]);
  // }

  // return finalRanks;

  //run through the array and place them accordingly
}

const res = climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
console.log({res})
