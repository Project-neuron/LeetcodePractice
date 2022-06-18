//limits: guard against out of bounds traversals
//a 0 is water and therefore not counted
// an island is connected horizontally and vertically
//

const numIslands = (graph) => {
  var islands = 0;
  var visited = new Set();
  for (var row = 0; row < grid.length; row++) {
    for (var col = 0; col < grid[0].length; col++) {
      var pos = row + "," + col;
      var onIsland = grid[row][col] == 1;

      if (onIsland && !visited.has(pos)) {
        islands++;
        explore(grid, row, col, visited);
      }
    }
  }
  return islands;
};

const explore = (grid, row, col, visited) => {
  // base case: position is in bounds
  const inBoundsRow = 0 <= row && row < grid.length;
  const inBoundsCol = 0 <= col && col < grid[0].length;
  if (!(inBoundsRow && inBoundsCol)) {
    return;
  }

  // base case: visited return if not add to visited set
  var pos = row + "," + col;
  var hasPos = visited.has(pos);
  if (!hasPos) {
    visited.add(pos);
  } else return;

  //base case: if position is on water: 0 return, if not: 1 continue
  var area = grid[row][col];
  if (area == 0) return;

  //iterative: cases check up down left and right positions for the islands
  explore(grid, row, col + 1, visited);
  explore(grid, row, col - 1, visited);
  explore(grid, row + 1, col, visited);
  explore(grid, row - 1, col, visited);
};
