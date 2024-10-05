var shovelChange = function (bills) {
  // implement function here

  function getAllIndexes(val, arr) {
    var indexes = [],
      i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }

  let wallet = [];
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5: {
        wallet.push(5);
        break;
      }

      case 10: {
        let all5 = getAllIndexes(5, wallet);
        if (all5.length === 0) {
          return false;
        }
        wallet.splice(all5[0], 1);
        wallet.push(10);

        break;
      }

      case 20: {
        let all5 = getAllIndexes(5, wallet);
        let all10 = getAllIndexes(10, wallet);

        if (all10.length >= 1 && all5.length >= 1) {
          wallet.splice(all5[0], 1);
          wallet.splice(all10[0], 1);
          wallet.push(20);
        } else if (all5.length >= 3) {
          for (let i = 0; i < 3; i++) {
            wallet.splice(all5[i], 1);
          }
        } else {
          return false;
        }

        break;
      }

      case 50: {
        let all5 = getAllIndexes(5, wallet);
        let all10 = getAllIndexes(10, wallet);
        let all20 = getAllIndexes(20, wallet);
        if (all5.length === 0) {
          return false;
        }
        if (all20.length >= 2) {
          wallet.splice(all20[0], 1);
          wallet.splice(all20[1], 0);
          wallet.splice(all5[0]);
          wallet.push(50);
        } else if (all20.length == 1 && all10.length >= 2) {
          wallet.splice(all20[0], 1);
          wallet.splice(all10[0], 1);
          wallet.splice(all10[1], 1);
          wallet.splice(all5[0], 1);
          wallet.push(50);
        } else if (all10.length >= 4) {
          for (let i = 0; i < 4; i++) {
            wallet.splice(all10[i], 1);
          }
          wallet.splice(all5[0], 1);
          wallet.push(50);
        } else if (all10.length === 3 && all5.length >= 3) {
          for (let i = 0; i < 3; i++) {
            wallet.splice(all10[i], 1);
            wallet.splice(all5[i], 1);
          }
          wallet.push(50);
        } else if (all10.length === 2 && all5.length >= 5) {
          for (let i = 0; i < 2; i++) {
            wallet.splice(all10[i], 1);
          }
          for (let i = 0; i < 5; i++) {
            wallet.splice(all5[i], 1);
          }
          wallet.push(50);
        } else if (all10.length === 1 && all5.length >= 7) {
          for (let i = 0; i < 7; i++) {
            wallet.splice(all5[i], 1);
          }
          wallet.splice(all10[0], 1);
          wallet.push(50);
        } else if (all5.length >= 9) {
          for (let i = 0; i < 9; i++) {
            wallet.splice(all5[i], 1);
          }
          wallet.push(50);
        } else {
          return false;
        }

        break;
      }
    }
  }

  return true;
};

let bills = [5, 5, 5, 20];

console.log(shovelChange(bills));
