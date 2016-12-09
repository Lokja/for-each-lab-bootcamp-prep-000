function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var array2 = ['0', '1', '2', '3', '4'];
  array2.forEach(callback);
  return array2
}

function doToArray(array, callback) {
  array.forEach(callback);
}