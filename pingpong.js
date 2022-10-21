const pingsAndPongs = process.argv[2];
console.log(pingsAndPongs);
let array= pingsAndPongs.split(",");

let pings = 0;
let pongs = 0;

for(i=0; i< array.length; i++){
    if(array[i] == "ping"){
        pings++
    }else {
        pongs++
    }
}
console.log(`Match result: ping vs pong: ${pings} - ${pongs}`);
