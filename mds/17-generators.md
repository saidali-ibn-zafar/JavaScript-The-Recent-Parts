In JavaScript, a "generator" typically refers to a special type of function called a generator function. Generator functions are a feature introduced in ECMAScript 2015 (ES6) and are denoted by an asterisk (*) placed after the function keyword. They allow you to create iterators that can pause and resume their execution, enabling you to control the flow of data generation.

```js
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return 4; 
}

const generator = numberGenerator();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: true }
```

- - - - - 

![declerative](https://github.com/saidali-ibn-zafar/JavaScript-The-Recent-Parts/assets/120341849/360e3504-4944-42ed-af71-01a95693745d)
