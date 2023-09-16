## Underscrore Extend

When we are using Underscore Extend, we need to write `underscore(_)` then inside the `parenthesis()` we need to write the `target` and then `source/s`
You can understand by reading and considering the following codes below: 

```js
const target = { name: "John" };
const source1 = { age: 30 };
const source2 = { email: "john@example.com" };

_.extend(target, source1, source2);

console.log(target);
// Output: { name: "John", age: 30, email: "john@example.com" }
```

