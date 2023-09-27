In this exercise we write a function using iterators and generators in js, and which will logs the numbers from 6 to 30 by 4: 

```js
var numbers = {
  *[Symbol.iterator]({ start = 0, end = 100, step = 2 } = {}) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  },
};

console.log(
  `My lucky numbers are: ${[
    ...numbers[Symbol.iterator]({
      start: 6,
      end: 30,
      step: 4,
    }),
  ]}`
);

```
