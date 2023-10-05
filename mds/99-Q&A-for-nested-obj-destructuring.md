- Question 1: What is nested object destructuring in JavaScript, and why is it useful?
  - Answer: Nested object destructuring is a feature in JavaScript that allows you to extract values from objects that are nested within other objects, and assign them to variables using a concise syntax. It's useful for simplifying code when working with deeply nested data structures, making it easier to access and work with nested properties.

- Question 2: How do you perform nested object destructuring to access properties within nested objects?
  - Answer: To perform nested object destructuring, you can use nested curly braces {} to specify the structure of the nested objects and access their properties. For example:
    ```js
    const person = {
      name: 'John',
      address: {
        street: '123 Main St',
        city: 'Exampleville',
      },
    };
    
    const { name, address: { street, city } } = person;
    ```

- Question 3: What happens if you attempt to destructure properties from a nested object that doesn't exist?
  - Answer: If you attempt to destructure properties from a nested object that doesn't exist, the variables for those properties will be assigned the value `undefined`. It's important to ensure that the nested objects and properties you're destructuring actually exist to avoid errors.

- Question 4: Can you provide default values for properties during nested object destructuring?
  - Answer: Yes, you can provide default values for properties during nested object destructuring by using the assignment operator `=` when declaring variables. If the property or nested object doesn't exist, the default value will be used. For example:
    ```js
    const person = {
      name: 'John',
    };
    
    const { name, address: { street = 'Unknown', city = 'Unknown' } } = person;
    ```

- Question 5: How can you rename properties while performing nested object destructuring?
  - Answer: You can rename properties during nested object destructuring by using the colon `:` followed by the new variable name. This allows you to assign the nested property to a variable with a different name. For example:
    ```js
    const person = {
      name: 'John',
      address: {
        street: '123 Main St',
        city: 'Exampleville',
      },
    };
    
    const { name, address: { street: streetAddress, city: cityName } } = person;
    ```
