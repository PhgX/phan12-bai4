let number = [-3,5,1,3,2,10];
let max = 0;
for (let i = 0; i < number.length; i++){
    if (number[i] > max) {
        max = number[i];
    }
    else {
        max = max;
    }
}
document.write(max);