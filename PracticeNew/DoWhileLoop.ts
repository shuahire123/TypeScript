/* 7. Write a program to print numbers from 1 to 10 using a do-while loop.
8. Write a Java program that performs basic arithmetic operations (addition, subtraction,
multiplication, and division) using a do-while loop until the user chooses to exit. */
/* let i=1;
do{
    console.log(i);
    i++;
}
while(i<=10); */
import * as readlineSync from "readline-sync";

let choice: number;

do {
    console.log("\nOperations supported:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulo Division");
    console.log("6. Exit");

    choice = Number(readlineSync.question("Enter your choice: "));

    if (choice >= 1 && choice <= 5) {
        let num1: number = Number(readlineSync.question("Enter first number: "));
        let num2: number = Number(readlineSync.question("Enter second number: "));

        switch (choice) {
            case 1:
                console.log(`Addition of ${num1} and ${num2} = ${num1 + num2}`);
                break;

            case 2:
                console.log(`Subtraction of ${num1} and ${num2} = ${num1 - num2}`);
                break;

            case 3:
                console.log(`Multiplication of ${num1} and ${num2} = ${num1 * num2}`);
                break;

            case 4:
                if (num2 !== 0) {
                    console.log(`Division of ${num1} and ${num2} = ${num1 / num2}`);
                } else {
                    console.log("Division by zero is not allowed");
                }
                break;

            case 5:
                if (num2 !== 0) {
                    console.log(`Modulo of ${num1} and ${num2} = ${num1 % num2}`);
                } else {
                    console.log("Modulo by zero is not allowed");
                }
                break;
        }
    } 
    else if (choice !== 6) {
        console.log("Invalid operation selected");
    }

} while (choice !== 6);

console.log("Program exited successfully");
