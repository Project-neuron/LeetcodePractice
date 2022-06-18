const leetcode = (graph) => {
  // need something to store the coordinates of places that can reach both oceans
  const canReachSets = [];

  // need to go for each item in the grid can I get to the pacific or atlantic
  for (var r = 0; r < graph.length; r++) {
    for (var c = 0; c < graph[0].length; c++) {
      // need to at each position try to reach the two oceans
      var canReachAtlantic = checkAtlanticOcean(graph, r, c, new Set());
      if (canReachAtlantic) {
        var canReachPacific = checkPacificOcean(graph, r, c, new Set());

        if (canReachAtlantic && canReachPacific) {
          // if it can be reached then I need to add the coordinates to a set
          canReachSets.push([r, c]);
        }
      }
    }
  }
  // once all grid locations have been traversed then return the set
  return canReachSets;
};

const checkAtlanticOcean = (graph, r, c, visited) => {
  const rowInbounds = 0 <= r && r < graph.length;
  const columnInbounds = 0 <= c && c < graph[0].length;
  if (!rowInbounds || !columnInbounds) return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  // base case
  // need to outline the base case of when you are at the atlantic or pacific ocean
  var atlantic = r == graph.length - 1 || c == graph[0].length - 1;
  if (atlantic) {
    return true;
  }

  var currentValue = graph[r][c];
  var nextValueRight = graph[r][c + 1];
  var nextValueDown = graph[r + 1][c];
  var nextValueLeft = graph[r][c - 1];
  var leftPos = r + "," + (c - 1);

  var canReachLeft = nextValueLeft <= currentValue && !visited.has(leftPos);
  var canReachAtlanticRight = nextValueRight <= currentValue;
  var canReachAtlanticDown = nextValueDown <= currentValue;
  if (!(canReachAtlanticRight || canReachAtlanticDown || canReachLeft)) {
    return false;
  }
  if (canReachAtlanticRight) {
    canReachAtlanticRight = checkAtlanticOcean(graph, r, c + 1, visited);
  }
  if (!canReachAtlanticRight && canReachLeft) {
    canReachLeft = checkAtlanticOcean(graph, r, c - 1, visited);
  }
  if (!canReachLeft) {
    return checkAtlanticOcean(graph, r + 1, c, visited);
  } else return true;
};

const checkPacificOcean = (graph, r, c, visited) => {
  //base case
  const rowInbounds = 0 <= r && r < graph.length;
  const columnInbounds = 0 <= c && c < graph[0].length;
  if (!rowInbounds || !columnInbounds) return false;

  // base case
  var atPacific = r == 0 || c == 0;
  if (atPacific) return true;

  //base case
  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  //iterative cases
  var currentValue = graph[r][c];
  var nextValueLeft = graph[r][c - 1];
  var nextValueUp = graph[r - 1][c];
  var nextValueRight = graph[r][c + 1];
  var rightPos = r + "," + (c + 1);

  var canReachPacificLeft = nextValueLeft <= currentValue;
  var canReachPacificUp = nextValueUp <= currentValue;
  var canReachRight = nextValueRight <= currentValue && !visited.has(rightPos);
  if (!(canReachPacificLeft || canReachPacificUp || canReachRight)) {
    return false;
  }
  if (canReachPacificLeft) {
    canReachPacificLeft = checkPacificOcean(graph, r, c - 1, visited);
  }
  if (!canReachPacificLeft && canReachRight) {
    canreachRight = checkPacificOcean(graph, r, c + 1, visited);
  }

  if (!canReachRight) {
    return checkPacificOcean(graph, r + 1, c, visited);
  } else return true;
};
