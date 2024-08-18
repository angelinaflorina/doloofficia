function processScale(data, specifiedScale) {
  // Check if specifiedScale is provided
  if (specifiedScale) {
    console.log("A specific scale is provided.");
    
    // Perform some operation using the specified scale
    data.forEach(item => {
      item.scaledValue = item.value * specifiedScale;
    });
  } else {
    console.log("No specific scale provided. Using default scale.");
    
    // Use a default scale factor
    const defaultScale = 1;

    data.forEach(item => {
      item.scaledValue = item.value * defaultScale;
    });
  }
  
  return data;
}

// Example usage:
const data = [
  { value: 10 },
  { value: 20 },
  { value: 30 }
];

// Case with specified scale
let result = processScale(data, 2);
console.log(result);
// Output: [{value: 10, scaledValue: 20}, {value: 20, scaledValue: 40}, {value: 30, scaledValue: 60}]

// Case without specified scale
result = processScale(data);
console.log(result);
// Output: [{value: 10, scaledValue: 10}, {value: 20, scaledValue: 20}, {value: 30, scaledValue: 30}]
