module.exports = function countCats(fence) {
  let cats = 0;
  for (row of fence) {
    for (item of row) {
      if (item === '^^') {
        cats += 1;
      }
    }
  }
  return cats;
};
