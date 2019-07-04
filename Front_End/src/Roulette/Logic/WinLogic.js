const checkResult = (winningNumber, board) => {
  let winningValue = parseInt(winningNumber, 10);
  let payout = 0;
    for (let section of board) {
      for (let bet of section) {
        if (bet.value > 0) {
          payout += calculatePayout(bet.name, bet.value, winningNumber, winningValue);
        }
      }
    }
  return payout;
};

const calculatePayout = (betName, stake, winningNumber, winningValue) => {
  const reds = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  const blacks = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
  const firstRow = [3,6,9,12,15,18,21,24,27,30,33,36];
  const secondRow = [2,5,8,11,14,17,20,23,26,29,32,35];
  const thirdRow = [1,4,7,10,13,16,19,22,25,28,31,34];
  switch (betName) {
    case '1to18':
      return (1 <= winningValue && winningValue <= 18) ? stake * 2 : 0;
      break;
    case '19to36':
      return (19 <= winningValue && winningValue <= 36) ? stake * 2 : 0;
      break;
    case 'red':
      return (reds.includes(winningValue)) ? stake * 2 : 0;
      break;
    case 'black':
      return (blacks.includes(winningValue)) ? stake * 2 : 0;
      break;
    case 'odd':
      return (winningValue !== 0 && winningValue % 2 !== 0) ? stake * 2 : 0;
      break;
    case 'even':
      return (winningValue !== 0 && winningValue % 2 === 0) ? stake * 2 : 0;
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
      return (firstRow.includes(winningValue)) ? stake * 3 : 0;
      break;
    case 'row2':
      return (secondRow.includes(winningValue)) ? stake * 3 : 0;
      break;
    case 'row3':
      return (thirdRow.includes(winningValue)) ? stake * 3 : 0;
      break;
    case '00':
      return (winningNumber === '00') ? stake * 36 : 0;
      break;
    default:
      return (winningNumber === betName) ? stake * 36 : 0;
  }
};

module.exports = checkResult;
