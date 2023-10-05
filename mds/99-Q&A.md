- Question 1: What is object destructuring in JavaScript, and why is it useful?

- Answer: Object destructuring is a JavaScript feature that allows you to extract values from objects and assign them to variables using a concise syntax. It is useful for simplifying code when working with objects, as it provides an easy way to access and work with object properties.

- Question 2: How do you declare and assign variables using object destructuring?

- Answer: You can declare and assign variables using object destructuring by enclosing the variable names in curly braces {} and specifying the object from which you want to destructure values. For example:
```js
const { firstName, lastName } = person;
```

- Question 3: What happens if you try to destructure a property that doesn't exist in the object?

- Answer: If you attempt to destructure a property that doesn't exist in the object, the variable will be assigned the value `undefined`. You can avoid this by providing default values during destructuring.

- Question 4: Can you rename destructured properties during assignment? If so, how?

- Answer: Yes, you can rename destructured properties during assignment by using the colon : to specify a new variable name. For example:
```js
const { firstName: fName, lastName: lName } = person;
```

- Question 5: How can you provide default values for destructured properties?

- Answer: You can provide default values for destructured properties by using the assignment operator = when declaring the variables. If the property is undefined in the object, the default value will be used. For example:
```js
const { age = 25 } = person;
```

- Question 6: What is the syntax for destructuring an object parameter in a function?

- Answer: To destructure an object parameter in a function, you can enclose the parameter in curly braces in the function's parameter list. For example:
```js
function printFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}
```

- Question 7: How do you destructure an object and also store the remaining properties in a separate variable?

- Answer: You can use the rest operator (...) to store the remaining properties of an object in a separate variable during destructuring. For example:
```js
const { firstName, lastName, ...rest } = person;
```

- Question 8: How can you conditionally destructure properties from an object based on whether they exist or not?
- Answer: You can conditionally destructure properties by using a default value in the destructuring pattern. If the property exists in the object, it will be assigned the value from the object. Otherwise, it will be assigned the default value. For example:
```js
const { name = 'Unknown' } = person;
```

- Question 9: Can you use object destructuring to swap the values of two variables without using a temporary variable?
- Answer: Yes, you can swap the values of two variables without a temporary variable using object destructuring like this:
```js
let a = 5;
let b = 10;
[a, b] = [b, a];
```

- Question 10: In nested object destructuring, how do you handle situations where an intermediate property might be undefined?
- Answer: You can handle this by providing default values for intermediate properties that might be undefined. For example:
```js
const { address: { street = 'Unknown' } } = person;
```

- Question 11: Is it possible to destructure properties from an array of objects using object destructuring? If so, how?
- Answer: No, object destructuring is not used to destructure properties from an array of objects. Instead, you would use array destructuring to extract values from arrays.

- Question 12: How do you destructure properties from an object within an array and collect them into a new array?
- Answer: You can achieve this by using a combination of array methods like `map` and object destructuring. Here's an example:
```js
const people = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
const names = people.map(({ name }) => name);
```

- Question 13: Can you destructure an object and rename properties while also providing default values for those renamed properties?
- Answer: Yes, you can do this by combining property renaming and default values in the destructuring pattern. For example:
```js
const { firstName: fName = 'John', lastName: lName = 'Doe' } = person;
```

- Question 14: What happens when you attempt to destructure an object that is not an object, but rather a different data type like a string or number?
- Answer: Attempting to destructure a non-object data type will result in a `TypeError`. Destructuring can only be used with objects and arrays.

- Question 15: Explain how you can destructure properties from a deeply nested object using the shorthand syntax.
- Answer: You can destructure properties from a deeply nested object using nested destructuring with shorthand syntax like this:
```js
const { prop1: { prop2: { prop3 } } } = deeplyNestedObject;
```

- Question 16: How do you destructure an object and exclude specific properties from the result, effectively filtering out unwanted properties?
- Answer: You can exclude specific properties by using the rest operator (...) and then omitting the properties you want to exclude. For example:
```js
const { unwantedProp, ...rest } = myObject;
```

- Question 17: Can you destructure properties from an object and immediately use them as arguments to a function in a single line of code? If so, provide an example.
- Answer: Yes, you can destructure properties and use them as function arguments in a single line. For example:
```js
function printFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}
printFullName(person);

```


