// Based on an excercise from Marjin Haverbeke's book 'Eloquent Javascript',
// this function compares two values and returns 'true' if they are equivalent, and
// furthermore, also returns 'true' if the two values are objects with exactly
// identical properties and exactly identical values for each given property,
// thus bypassing the fact that two such object are technically inequivalent given
// that each seperately declared object has a unique identity, regardless of their
// internal structure.
function deepEqual(val1, val2) {
  if (val1 === val2) return true;
  else if (
    typeof val1 === "object" &&
    typeof val2 === "object" &&
    !(val1 === null || val2 === null)
  ) {
    let obj1Properties = Object.keys(val1);
    let obj2Properties = Object.keys(val2);
    for (index in obj1Properties) {
      let test_property = obj1Properties[index];
      let match = false;
      for (index in obj2Properties) {
        if (obj2Properties[index] === test_property) {
          match = deepEqual(val1[test_property], val2[test_property]);
        }
      }
      if (match === false) return false;
    }
    return true;
  } else return false;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(null, null));
// -> true
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(null, obj));
// -> false
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(
  deepEqual(
    { here: { is: { yet: { another: "," } } }, bigger: "object" },
    { here: { is: { yet: { another: ";" } } }, bigger: "object" }
  )
);
// -> false
