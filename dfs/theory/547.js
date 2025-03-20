/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.


*/

var findCircleNum = function (isConnected) {
  let provinces = 0;
  let visited = new Set();

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      provinces++;
      dfs(i, isConnected, visited);
    }
  }
  return provinces;
};

var dfs = function (cur, isConnected, visited) {
  visited.add(cur);
  for (let j = 0; j < isConnected.length; j++) {
    if (isConnected[cur][j] === 1 && !visited.has(j)) {
      dfs(j, isConnected, visited);
    }
  }
};
