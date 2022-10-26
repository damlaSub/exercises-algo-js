const input = process.argv[2];
const numbers = input.split(",");
console.log(numbers);

let numberRepeated = 0;
let combo = false;

for(let i=0; i< 5; i++){
    let tmp = 0;
    for(j=0; j<5;j++){
        if((numbers[i] == numbers[j]) && (
            (numbers[j] == numbers[j-1]) && (numbers[j] == numbers[j+1]))){
                tmp++;
                combo = true;
            }
            else if(numbers[i]==numbers[j]){
                tmp++;
            }
            if(tmp >= 3){
                numberRepeated = numbers[i];
            }
    }
}
if(numberRepeated != 0 && combo){
    console.log(`Le nombre ${numberRepeated} apparait 3 fois de suite`);
}else if(numberRepeated !=0){
    console.log(`Le nombre ${numberRepeated} apparait 3 fois`);
}else{
    console.log("Aucun nombre n'apparait 3 fois");
}

/*
IN numbers[] OF NUMBER
LET numberRepeated = 0
LET combo = false
FOR LET i = 0 TO 4
    LET tmp = 0
    FOR j = 0 TO 4
        IF numbers[i] == numbers[j] && (
            numbers[j] == numbers[j-1] && numbers[j] == numbers[j+1])
                tmp++
                combo = true
        ELSE IF numbers[i]==numbers[j]
                tmp++
        IF tmp >= 3
            numberRepeated = numbers[i]
            
IF numberRepeated != 0 && combo
    Output "Le nombre " + numberRepeated + "apparait 3 fois de suite"
ELSE IF numberRepeated !=0 
    Output "Le nombre " + numberRepeated + "apparait 3 fois"
ELSE    
    OUTPUT "Aucun nombre n'apparait 3 fois"
*/