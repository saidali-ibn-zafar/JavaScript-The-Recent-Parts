In this example below, we are using `b` two times, because we can list same source property as many times as we need to, target is different positions, why we need this, because if we need whole object we can use `b`, and if we need properties we can also use in more comfortble ways.

```js
const myObj = {
  a: 1,
  b: {
    x: 2
  },
  c: 3
};

let {
  a, 
  b,
  b:{
    x: W
  } = {},
  c
} = myObj
```

- - - - - 

We can also do that occation with arrays as well:

```js
const myArr = {
  a: 1,
  b: [111, 111]
  c: 3
};

let {
  a, 
  b,
  b:[
      X,
      Y
  ] = [],
  c
} = myArr
```
