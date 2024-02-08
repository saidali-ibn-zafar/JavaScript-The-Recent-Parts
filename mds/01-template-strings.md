## JavaScript Template Literals

#What are template literal strings? 
 - Template literal strings are used inside of back-tics. And we use $ sign and {} brackets to interpolate variables into a string, and then result will be as a single text.

- - - - - 
- Synonyms:
    - Template Literals
    - Template Strings
    - String Templates
    - Back-Tick Syntax
- - - - - 

## 1) Back-Tics Syntax
```js
let text = `Hello World!`;

```

## 2) Quotes Inside Strings
```js
let text = `He's often called "Ali"`;

```

## 3) Multiline Strings
```js
let text =
`The quick
brown fox
jumps over
the lazy dog`;
```
- - - - - 
## Interpolation

Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called `string interpolation`.

The syntax is: `${...}`
- - - - -

## Variable Substitutions
```js
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
```

- - - - - 

## Definition:
What is `String Interpolation`?
- String interpolation allows you to insert values into a string and control the text formatting of the resulting string as well.
