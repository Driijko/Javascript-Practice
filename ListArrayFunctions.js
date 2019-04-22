// Based on an excercise from Marjin Haverbeke's book 'Eloquent Javascript',
// the following four functions allow one to:
// 1.) recursively transform arrays into linked lists,
// 2.) transform linked lists into arrays,
// 3.) to add a new value to the start of a linked list, and
// 4.) to return the value at a given position of a linked list.

function arrayToList(array) {
  let index = 0;
  let list = {};

  function inner(index) {
    if (index === array.length - 1) return { value: array[index], rest: null };
    else {
      return (list = { value: array[index], rest: inner(index + 1) });
    }
  }
  return inner(index);
}

function listToArray(list) {
  let position = 0;
  let array = [];
  array[position] = list.value;
  while (!(list.rest === null)) {
    list = list.rest;
    position++;
    array[position] = list.value;
  }
  return array;
}

function prepend(new_value, list) {
  list = { value: new_value, rest: list };
  return list;
}

function nth(list, target_position) {
  current_position = 0;

  function inner() {
    if (current_position === target_position) return list.value;
    else if (list.rest === null) return undefined;
    else {
      current_position++;
      list = list.rest;
      return inner();
    }
  }
  return inner();
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, { value: 30, rest: null })));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), -1));
// → 20
