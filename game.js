#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// classes player & opponent
let player = await inquirer_1.default.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name: "
});
//Player name & Opponent select
let opponent = await inquirer_1.default.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent",
    choices: ['Skeleton', 'Assassin', 'Zombie']
});
//Gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == 'Skeleton') {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ['Attack', 'Drink Portion', 'Run for your life...'],
        });
        if (ask.opt == 'Attack') {
            console.log('attack!');
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic("You Loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == 'Drink Portion') {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == 'Run for your life...') {
            console.log(chalk_1.default.red.bold.italic("You Loose, Better Luck Next Time!"));
            process.exit();
        }
    }
    //Assassin
    if (opponent.select == 'Assassin') {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ['Attack', 'Drink Portion', 'Run for your life...'],
        });
        if (ask.opt == 'Attack') {
            console.log('attack!');
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic("You Loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == 'Drink Portion') {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == 'Run for your life...') {
            console.log(chalk_1.default.red.bold.italic("You Loose, Better Luck Next Time!"));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == 'Zombie') {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ['Attack', 'Drink Portion', 'Run for your life...'],
        });
        if (ask.opt == 'Attack') {
            console.log('attack!');
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.red.bold.italic("You Loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == 'Drink Portion') {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == 'Run for your life...') {
            console.log(chalk_1.default.red.bold.italic("You Loose, Better Luck Next Time!"));
            process.exit();
        }
    }
} while (true);
