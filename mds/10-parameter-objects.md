# What is Parameter Objects?
- Parameter objects typically refer to an approach in software development where instead of passing multiple individual parameters to a function or method, we pass a single object that encapsulates all the parameters.

```js
function data({a = 0, b = 0, c = 0} = {}, x){
  // ...
}

const myObj = {a: 1, b: 2, c: 3};
const x = 7;

data(myObj, x);
```

