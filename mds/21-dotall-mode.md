
## Dotall mode? 
When we use dotall mode or s flag, it matches any character includes `new line` as well. 

```js
var msg = `
    the quick brown fox 
    jumps over the 
    lazy dog
`   

const res1 = msg.match(/brown.*over/);

const res2 = msg.match(/brown.*over/s);

console.log(res1);
console.log(res2);
```
