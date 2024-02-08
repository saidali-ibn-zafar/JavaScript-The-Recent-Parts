## Tagged Literal Templates

We can think of a tag template as a function that takes in a mix of strings and variables and then formats them and returns them based on some conditions or rules that we apply. 

```js
const greeting = (strings, name) => {
  const now = new Date();
  const timePeriod = now.getHours() < 12 ? "Morning" : now.getHours() < 17 ? "Evening" : "Afternoon";
  return `Good ${timePeriod} ${name}${strings[1]}`;
};

const name = "James";

greeting`Hello ${name} nice to meet you!`;

```
