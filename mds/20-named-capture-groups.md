Named capture groups in JavaScript are a feature of regular expressions that allow you to assign names to specific parts of a regular expression pattern. This makes it easier to extract and work with specific pieces of text matched by the regular expression. Named capture groups were introduced in ECMAScript 2018 (ES9) and are supported in modern JavaScript engines.

Define a named capture group using the (?<name>...) syntax, where "name" is the name you want to assign to the group, and "..." is the regular expression pattern you want to capture.

```js
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

```

In this example, we have defined three named capture groups: "year," "month," and "day."

Use the exec method of the regular expression object to perform the match, and then access the captured values using the groups property of the result.

```js
const match = regex.exec('2023-09-28');
console.log(match.groups.year);  // "2023"
console.log(match.groups.month); // "09"
console.log(match.groups.day);   // "28"

```

or we can use destructuring : 

```js
const { year, month, day } = regex.exec('2023-09-28').groups;
console.log(year);  // "2023"
console.log(month); // "09"
console.log(day);   // "28"

```
