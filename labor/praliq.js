// Suppose we have an object h
let h = {};

// The name property we want to work with
let name = 'myList';

// The value we want to push into the array
let x = 42;

// Use the provided idiom to add x to the array at h[name]
(h[name] || (h[name] = [])).push(x);

console.log(h);
// Output: { myList: [42] }

// Adding another element
let y = 100;
(h[name] || (h[name] = [])).push(y);

console.log(h);
// Output: { myList: [42, 100] }
