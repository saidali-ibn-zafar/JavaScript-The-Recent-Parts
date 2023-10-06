## Iterators

What is an Iterator? 
- We can say Iterator is a thing that helps us go through a set of values. It means that it presents a value at one time from a data source.

- - - - - 

### Using .next() :

We can create an iterator for the string "Saidali" and use the `.next()` method to iterate over its characters. 

```js
const str = "Saidali";

// Get an iterator for the string
const iterator = str[Symbol.iterator]();

// Loop through the string using the iterator
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

```
- - - - - 

### Using for...of :
We can achieve the same result using a `for...of` loop, which simplifies the iteration process and eliminates the need to manually call `.next()`. Here's an alternative way to iterate over the string "Saidali":

```js
const str = "Saidali";

// Use a for...of loop to iterate over the string
for (const char of str) {
  console.log(char);
}

```

- - - - - 

### Using Spread Operator ... : 

We can use the spread operator ... to convert the string into an array of characters in a more concise way.

```js
const str = "saidali";
const letters = [...str];
console.log(letters);
```

- - - - - 

### Additional way using forEach() :

```js
const str = "Saidali";

// Convert the string to an array and use forEach
Array.from(str).forEach((char) => {
  console.log(char);
});

```
