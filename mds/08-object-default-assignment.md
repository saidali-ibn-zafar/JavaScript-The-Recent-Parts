## Object Default Assignment


```js
function data(){
    return {a:1, b:2};
}

var result = data() || {};
var c = result.c !== undefined ? result.c : null;

console.log(c);

```

## with Destructuring:

```js
function data(){
    return {a:1, b:2};
}

var {
    a,
    b,
    c = null
} = data() || {};

console.log(c);
```
