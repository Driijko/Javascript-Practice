# Javascript Notes

## Closure

- wow cool

```javascript
function arrayToList(array) {
  let index = 0;
  let list = {};

  function inner(index) {
    if (index === array.length - 1) return { value: array[index], rest: null };
    else {
      list.value = array[index];

      //       jhkjhkjhkjhkjhkj
      list.rest = inner(index + 1);
      return list;
    }
  }
  return inner(index);
}
```
