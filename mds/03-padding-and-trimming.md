## Padding and Trimming 
From now on, we do not have `LEFT` and `RIGHT` anymore!
We do not have `left and right padding`, we do not have `left and right trimming`, instead we have `START` and `END`.
- - - - - 

### padStart()
```js
// left = start padding(padStart)

let str = "Hello"; 

str.padStart(5); // "Hello"

str.padStart(8); // "   Hello"

str.padStart(8, "*"); // "***Hello"

str.padStart(8, "12345"); // "123Hello"

str.padStart(8, "ab"); // "abaHello"

```
- - - - - 
### padEnd()
```js
// right = end padding(padEnd)

let str = "Hello";

str.padEnd(5); // "Hello"

str.padEnd(8); // "Hello   "

str.padEnd(8, "*"); // "Hello***"

str.padEnd(8, "12345"); // "Hello123"

str.padEnd(8, "ab"); // "Helloaba"

```

- - - - - 

## Trimming

```js
// left = start trimming(trimStart);
// right = end trimming(trimEnd);

let str = "  some stuff \t\t";

str.trim(); // "some stuff"
str.trimStart(); // "some stuff     "
str.trimEnd(); // "  some stuff"

```
