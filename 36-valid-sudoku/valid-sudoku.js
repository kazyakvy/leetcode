/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const mapTable = [[{},{},{}],
                    [{},{},{}],
                    [{},{},{}],];
  for (let i = 0; i < board.length; i++) {
      const map1 = {};
      const map2 = {};
      for (let j = 0; j < board.length; j++) {
          const value1 = board[i][j];
          const value2 = board[j][i];
          if (map1[value1] && value1 !== '.') {
               return false;
          }
          map1[value1] = 1;
          if (map2[value2] && value2 !== '.') {
               return false;
          }
          map2[value2] = 1;
          const x = Math.floor(i/3);
          const y = Math.floor(j/3);
          const value = board[i][j];
          if (mapTable[x][y][value] && value !== '.') {
               return false;
          }
          mapTable[x][y][value] = 1;
      }
  }
  return true;
};