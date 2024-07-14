#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds, addHours, addMinutes } from "date-fns";
import chalk from "chalk";
// =======================================================================
console.log(chalk.blue.bold(`###############################################################`));
console.log(chalk.yellow.bold("\n\t\t\tCOUNTDOWN TIMER \n"));
console.log(chalk.blue.bold(`###############################################################\n`));
const ask = await inquirer.prompt({
    name: "ans",
    type: "list",
    message: "What Timer do you want to start",
    choices: [{ value: "Hours" }, { value: "Minutes" }, { value: "Seconds" }]
});
console.log(chalk.magentaBright(`\nYou Select ${ask.ans} For Countdown Timer.\n`));
// ================================== HOURS ==============================
if (ask.ans === "Hours") {
    const timerForMinutes = await inquirer.prompt({
        name: "userInput",
        type: "number",
        message: "Enter The Number of hours for The timer : ",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please Enter Only Number";
            }
            else if (input > 24) {
                return "Number is not greater than 24";
            }
            else {
                return true;
            }
        }
    });
    let input1 = timerForMinutes.userInput;
    function startTimer(value) {
        const intTime = addHours(new Date().getTime(), value);
        const timeInterval = new Date(intTime);
        setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDiffer = differenceInSeconds(timeInterval, currentTime);
            if (timeDiffer <= 0) {
                console.log("Timer Has Stopped!!");
                process.exit();
            }
            const hour = Math.floor((timeDiffer % (3600 * 24)) / 3600);
            const min = Math.floor((timeDiffer % 3600) / 60);
            const sec = Math.floor(timeDiffer % 60);
            console.log(chalk.green(`${hour.toString().padStart(2, "0")} : ${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`));
        }, 1000);
    }
    console.log(chalk.redBright.bold.underline("Let's Start Timer"));
    startTimer(input1);
}
// ================================== MINUTES =============================
else if (ask.ans === "Minutes") {
    const timerForMinutes = await inquirer.prompt({
        name: "userInput",
        type: "number",
        message: "Enter The Number of minutes for  timer: ",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please Enter Only Number";
            }
            else if (input > 60) {
                return "Number is not greater than 60";
            }
            else {
                return true;
            }
        }
    });
    let input2 = timerForMinutes.userInput;
    function startTimer(value) {
        const intTime = addMinutes(new Date(), value).getTime();
        const timeInterval = new Date(intTime);
        setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDiffer = differenceInSeconds(timeInterval, currentTime);
            if (timeDiffer <= 0) {
                console.log("Timer Has Stopped!!");
                process.exit();
            }
            const min = Math.floor((timeDiffer % (3600 * 24)) / 60);
            const sec = Math.floor(timeDiffer % 60);
            console.log(chalk.green(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`));
        }, 1000);
    }
    console.log(chalk.redBright.bold.underline("Let's Start Timer"));
    startTimer(input2);
}
// ================================== SECONDS ===============================
else if (ask.ans === "Seconds") {
    const timerForSecond = await inquirer.prompt({
        name: "userInput",
        type: "number",
        message: "Enter The Number of seconds for  timer: ",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please Enter Only Number";
            }
            else if (input > 60) {
                return "Number is not greater than 60";
            }
            else {
                return true;
            }
        }
    });
    let input3 = timerForSecond.userInput;
    function startTimer(value) {
        const intTime = new Date().getTime() + value * 1000;
        const timeInterval = new Date(intTime);
        setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDiffer = differenceInSeconds(timeInterval, currentTime);
            if (timeDiffer <= 0) {
                console.log("Timer Has Stopped!!");
                process.exit();
            }
            const min = Math.floor((timeDiffer % (3600 * 24)) / 3600);
            const sec = Math.floor(timeDiffer % 60);
            console.log(chalk.green(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`));
        }, 1000);
    }
    console.log(chalk.redBright.bold.underline("Let's Start Timer"));
    startTimer(input3);
}
