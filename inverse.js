const input = process.argv[2];
console.log(input);
let array = input.split(",");
array.reverse();


console.log(array);


/*
let min = 0;
let max = array.length - 1;

while(min < max) {
    let tmp = array[max];
        array[max] = array[min];     
        array[min] = tmp;
        min++;
        max--;
}
*/