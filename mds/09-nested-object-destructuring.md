## Nested Object Destructuring
In this md file, we will be talking about wokring on nested objects, here is some examples:

```js
function data(){
    return {
        a:1, 
        b:{
            c:3, 
            d:4
        
        }
    };
};

var tmp = data() || {};
var a = tmp.a;
var b = tmp.b || {};
var c = b.c;
var d = b.d;

```

## with Destructuring:

```js
function data(){
    return {
        a:1, 
        b:{
            c:3, 
            d:4
        
        }
    };
};

var {
    a,
    b:{
        c,
        d
    } || {}
} = data() || {};
```
