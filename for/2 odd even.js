/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
console.log("Odd numbers: ");
for(let num = 61; num <= 100; num++){
    if(num % 2 !== 0){
        console.log(num);
    }
}
console.log("Even numbers: ");
for(let num = 78; num <= 98; num++){
    if(num % 2 === 0){
        console.log(num);
    }
}