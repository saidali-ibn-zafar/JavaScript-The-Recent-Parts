## Named Arguments

Well, take a look at the codes below first, then continue reading >>> 

```js
function lookupRecords({ store = "person-records", id = 11}) {
  // ... You can add your logic here ...
  console.log("lookupRecords Function Called with store:", store, "and id:", id);
}

lookupRecords({id: 42, store: "my-records"});
```

these codes above includes named arguments, that means if we do not use { ... } , it is kind of positional arguments, right? so we are using {} and then we do not have to care about order of those arguments, if we insert one of them or some of them then the rest would be undefined as you know.
