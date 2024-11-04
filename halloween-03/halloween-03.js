function findSafestPath(dream) {
  const rows = dream.length;
  const columns = dream[0].length;
      
  dream[0].reduce((acc, _, j) => (dream[0][j] += acc), 0)
  dream.reduce((acc, _, i) => (dream[i][0] += acc), 0)

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dream[i][j] += Math.min(dream[i - 1][j], dream[i][j - 1])
    }
  }

  return dream[rows - 1][columns - 1]
}
