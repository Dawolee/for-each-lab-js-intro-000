function iterativeLog(array) {
  array.forEach(console.log(${index}: ${element}));
}

function iterate(callback) {
  var food = ["pizza", "pasta", "ramen"];
  food.forEach(callback);
  return food;
}

var doToArray = (array, callback) => {
  array.forEach(callback);
}
