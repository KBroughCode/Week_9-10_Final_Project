const checkResult = (winningNumber, board) => {
  let winningValue = parseInt(winningNumber, 10);
  let payout = 0;
    for (let section of board) {
      for (let bet of section) {
        if (bet.value > 0) {
          payout += calculatePayout(bet.name, bet.value, winningValue);
        }
      }
    }
  return payout;
};

const calculatePayout = (betName, stake, winningValue) => {
  switch (betName) {
    case '1to18':
      return (1 <= winningValue && winningValue <= 18) ? stake * 2 : 0;
      break;
    case '19to36':
      return (19 <= winningValue && winningValue <= 36) ? stake * 2 : 0;
      break;
    case 'red':

      break;
    case 'black':

      break;
    case 'odd':

      break;
    case 'even':

      break;
    case '1to12':
      return (1 <= winningValue && winningValue <= 12) ? stake * 3 : 0;
      break;
    case '13to24':
      return (13 <= winningValue && winningValue <= 24) ? stake * 3 : 0;
      break;
    case '25to36':
      return (25 <= winningValue && winningValue <= 36) ? stake * 3 : 0;
      break;
    case 'row1':

      break;
    case 'row2':

      break;
    case 'row3':

      break;
    case '00':

      break;
    default:

  }
};

module.exports = checkResult;
