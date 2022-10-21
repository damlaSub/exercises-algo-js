const input = process.argv[2];
console.log(input);
let array = input.split(",");
console.log(array);
let sum = 0;
for(i=0; i< array.length; i++){
    let value = parseInt(array[i]);
    sum = sum + value;
}
console.log(`Sum is equal to ${sum}`)



/*
IN numbers[] of NUMBER
LET sum = 0 // or of NUMBER
FOR LET i = 0 TO (numbers LENGTH - 1)
    LET value = numbers[i]
    sum = sum + value
    // sum = sum + numbers[i]
    // sum += numbers[i]
OUT "Sum is equal to " + sum

*/