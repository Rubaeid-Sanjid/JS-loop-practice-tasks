/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let num = 1;
while(num <= 100){
    num++;
    let square = num*num;
    console.log(square);
    if(square === (num*num)){
        break;
    }
}