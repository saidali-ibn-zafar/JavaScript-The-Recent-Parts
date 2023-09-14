## Object Destructuring:
Object destructuring is a feature introduced in ECMAScript 6 (ES6) that provides a convenient way to extract properties from an object into separate variables. It simplifies the process of accessing object properties and can make our code more readable.

```js
const person = { firstName: 'John', lastName: 'Doe' };

// Object destructuring
const { firstName, lastName } = person;

console.log(firstName); // 'John'
console.log(lastName);  // 'Doe'
```

- - - - - 

## Object Assignment Destructuring:
Object assignment destructuring is a feature that allows us to assign values to object properties using variables. This is often used in scenarios where we want to create or update an object with specific property values.

```js
let firstName = 'John';
let lastName = 'Doe';

// Object assignment destructuring
const person = { firstName, lastName };

console.log(person); // { firstName: 'John', lastName: 'Doe' }

```
In this case, the values of firstName and lastName variables are assigned to the corresponding properties of the person object when it's created.

- - - - - 

## ATTENTION!

False:
![wrong ](https://github.com/saidali-ibn-zafar/JavaScript-The-Recent-Parts/assets/120341849/72f0f82a-d793-4d20-8b95-895096e34a5f)

True: 
![wrappedBraces](https://github.com/saidali-ibn-zafar/JavaScript-The-Recent-Parts/assets/120341849/7de882cc-3473-4f89-8dca-dc1725449c01)

Additional Info: 
![noLongerThinks](https://github.com/saidali-ibn-zafar/JavaScript-The-Recent-Parts/assets/120341849/a43e2333-8050-470c-a092-e519bf6afc03)

