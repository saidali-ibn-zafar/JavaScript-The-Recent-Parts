function data() {
  return [1, 2, 3];
}

let tmp = data();
let first = tmp[0];
// let second = tmp[1];
let third = tmp[2];
let rest = tmp.slice(3);

console.log(rest); // []

// - - - - -

function data2() {
  return [1, 2, 3];
}

let [first2, , third2, ...rest2] = data2();

console.log(first2);
console.log(third2);
console.log(rest2); // []
