/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
console.log("Odd numbers: ")
let num = 61;
while(num <= 100){
    if(num % 2 !== 0){
        console.log(num);
    }
    num++;
}
console.log("Even numbers: ");
let num2 = 78;
while(num2 <= 98){
    if(num2 % 2 === 0){
        console.log(num2);
    }
    num2++;
}