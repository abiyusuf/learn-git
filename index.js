let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array of random numbers:", numbers);

// Initialize variables for total, min, and max
let total = 0;
let min = numbers[0];
let max = numbers[0];

// Calculate total, min, and max
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];

    if (numbers[i]<min)
        min= numbers[i];
    if (numbers[i]>max)
        max=numbers[i];
}

// Calculate the average
let average = total / numbers.length;

// Output the results
console.log("Total:", total);
console.log("Average:", average);
console.log("Minimum:", min);
console.log("Maximum:", max);