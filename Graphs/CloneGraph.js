const cloneGraph = (node) => {
  var oldToNew = new Map();

  const dfs = (node) => {
    var nodeClone = oldToNew.get(node);
    if (node != undefined) {
      return nodeClone;
    }
    var copy = Node(node.val, []);
    oldToNew.set(node, copy);
    for (var i = 0; i < node.neighbors.length; i++) {
      copy.neighbors.push(dfs(node.neighbors[i]));
    }
    return copy;
  };
};
