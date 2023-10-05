- Question 1: What is array destructuring in JavaScript, and why is it useful?
- Answer: Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables using a concise syntax. It's useful for simplifying code when working with arrays, making it easier to access and work with array elements.
-----
- Question 2: How do you declare and assign variables using array destructuring?
- Answer: You can declare and assign variables using array destructuring by enclosing variable names in square brackets [] and specifying the array from which you want to destructure values. For example:
  ```js
  const [first, second] = myArray;
  ```
-----
- Question 3: Can you skip elements during array destructuring if you're not interested in them? If so, how?
- Answer: Yes, you can skip elements during array destructuring by omitting the corresponding variable names. For example:
  ```js
  const [first, , third] = myArray; # Skips the second element
  ```
-----
- Question 4: How can you use the rest operator (...) in array destructuring?
- Answer: You can use the rest operator to collect remaining elements of an array into a new array variable. For example:
  ```js
  const [first, ...rest] = myArray;
  ```
-----
- Question 5: Is it possible to swap the values of two variables using array destructuring? If so, provide an example.
- Answer: Yes, you can swap the values of two variables using array destructuring. Here's an example:
  ```js
  let a = 5;
  let b = 10;
  [a, b] = [b, a];
  ```
-----
- Question 6: How can you use default values in array destructuring to handle missing array elements?
- Answer: You can provide default values during array destructuring by using the assignment operator = when declaring variables. If the element is missing or undefined, the default value will be used. For example:
  ```js
  const [first = 1, second = 2] = myArray;
  ```
-----
- Question 7: What happens when you try to destructure an element from an empty array?
- Answer: Destructuring an element from an empty array results in the variable being assigned undefined. For example:
  ```js
  const [element] = [];
  ```
-----
- Question 8: Can you use array destructuring to extract elements from nested arrays? If so, how?
- Answer: Yes, you can use array destructuring to extract elements from nested arrays by nesting the destructuring pattern. For example:
  ```js
  const nestedArray = [1, [2, 3], 4];
  const [first, [second, third], fourth] = nestedArray;
  ```
-----
- Question 9: How do you destructure elements from an array parameter in a function?
- Answer: To destructure elements from an array parameter in a function, you can enclose the parameter name in square brackets in the function's parameter list. For example:
  ```js
  function printNumbers([first, second]) {
    console.log(`First: ${first}, Second: ${second}`);
  }
  ```
-----
- Question 10: What is the difference between array destructuring and object destructuring in JavaScript?
- Answer: Array destructuring extracts elements from arrays based on their order, while object destructuring extracts values from objects based on their property names. Array destructuring uses square brackets [], while object destructuring uses curly braces {}.
-----
