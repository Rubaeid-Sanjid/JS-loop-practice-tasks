

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
let sum = 0;
for(let num = 91; num <= 129; num++){
    if(num % 2 !== 0){
        sum += num; 
    }
}
console.log("Sum of Odd numbers: "+ sum);

let evenSum = 0;
for(let num = 51; num <= 85; num++){
    if(num % 2 === 0){
        evenSum += num; 
    }
}
console.log("Sum of even numbers: "+ evenSum);