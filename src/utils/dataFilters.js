const getUniqueNodes = (data) => {
  let nodes = [];
  for (let i = 0; i < data.length; i++) {
    if (nodes.indexOf(data[i].SNN) < 0) {
      nodes.push(data[i].SNN);
    }
    if (nodes.indexOf(data[i].ENN) < 0) {
      nodes.push(data[i].ENN);
    }
  }
}

export { getUniqueNodes };