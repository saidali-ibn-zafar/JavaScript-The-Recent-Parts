function data() {
  return [1, null, 3, 4, 5];
}

// imperatively
let tmp = data();
let first = tmp[0];
let second = tmp[1] !== undefined ? tmp[1] : 10;
let third = tmp[2];
let rest = tmp.slice(3);

console.log(first);
console.log(second);
console.log(third);
console.log(rest);

// - - - - -

function data2() {
  return [1, 2, , 4, 5];
}
// destructuring patern
let [first2, second2, third2 = 10, ...rest2] = data2();

console.log(first2);
console.log(second2);
console.log(third2);
console.log(rest2);
