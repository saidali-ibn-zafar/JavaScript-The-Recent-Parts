const num = 42;
const paddedNum = num.toString().padStart(5, "0");
console.log(paddedNum); // 00042

// - - - - -

const text = "Hello";
const paddedText = text.padEnd(10, " ");
console.log(`"${paddedText}"`); // "Hello     "

// - - - - -

const paddedString = "   Padded Text   ";
const trimmedString = paddedString.trim();
console.log(`"${trimmedString}"`); // "Padded Text"

// - - - - -

const text2 = "Custom";
const paddedText2 = text2.padEnd(10, "-*");
console.log(`"${paddedText2}"`); //  "Custom-*-*"

// - - - - -

const negativeNum = -42;
const paddedNum3 = negativeNum.toString().padStart(5, "0");
console.log(paddedNum3); // 00-42

// - - - - -

const dynamicPadding = (text, minLength, char) => {
  return text.padStart(minLength, char);
};

const result1 = dynamicPadding("Dynamic", 10, "-");
const result2 = dynamicPadding("Padding", 5, "*");

console.log(`"${result1}"`); // "---Dynamic"
console.log(`"${result2}"`); // "Padding"

// - - - - -

const text4 = "Padding";
const paddedText4 = text4.padStart(10, "");
console.log(`"${paddedText4}"`); // "Padding"

// - - - - -

const paddedString2 = "***Trim Me***";
const trimmedString2 = paddedString2.trim("*");
console.log(`"${trimmedString2}"`); // ?
