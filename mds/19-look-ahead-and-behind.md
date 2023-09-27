
```js
var msg = "Hello World";

console.log(msg.match(/(l.)/g));
// ["ll", "ld"];

console.log(msg.match(/(l.)$/g));
// ["ld"];

console.log(msg.match(/(l.)(?=o)/g));
// ["ll"]

console.log(msg.match(/(l.)(?!o)/g));
// ["lo", "ld"]
```
