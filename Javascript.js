function arrayToList(array) {
  let index = 0;
  let list = {};

  function inner(index) {
    if (index === array.length - 1) return { value: array[index], rest: null };
    else {
      list.value = array[index];
      list.rest = inner(index + 1);
      return list;
    }
  }
  return inner(index);
}

// test for git
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value:        20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
