let start = parseInt(prompt("Enter the first number:"));
let end = parseInt(prompt("Enter the second number (should be 30 more than the first number):"));

if (!isNaN(start) && !isNaN(end) && end - start === 30) {
    for (let i = start; i <= end; i++) {
        if (i % 7 === 0) {
            console.log(`Stopped at ${i} (multiple of 7 found)`);
            break; 
        }
        console.log(i);
    }
} else {
    console.log("Invalid input! Make sure the second number is exactly 30 more than the first.");
}
