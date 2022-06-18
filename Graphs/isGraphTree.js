const leetcode = (edges, num) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  if (num > 0) {
    explore(-1, 0, graph, visited);
    var visitedSize = visited.size;
    return visitedSize == num;
  } else return true;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const explore = (previousNode, node, graph, visited) => {
  //base case
  if (visited.has(node)) return false;
  visited.add(node);

  for (item of graph[node]) {
    if (item != previousNode) {
      if (!explore(node, item, graph, visited)) return false;
    }
  }
};
