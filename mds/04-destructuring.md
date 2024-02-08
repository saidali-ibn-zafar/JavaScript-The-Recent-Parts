## Destructuring
What is destructuring? 
- Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects.

## obj
```js
const person = { firstName: 'John', lastName: 'Doe' };

// Using object destructuring
const { firstName, lastName } = person;

console.log(firstName); // Output: 'John'
console.log(lastName);  // Output: 'Doe'
```

## arr
```js
const numbers = [1, 2, 3];

// Using array destructuring
const [first, second, third] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3
```

## additional information: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers/
