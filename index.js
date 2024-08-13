const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'Logo name',
        message: 'What is the name of your Logo?', 
    },

    {
        type: 'input',
        name: 'name',
        message: 'What color in the text of your Logo?',
    },

    {
        type: 'list',
        message: 'What shape do you want your Logo?',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    {
        type: 'input',
        name: 'shapecolor',
        message: 'What is the color of the shape of your Logo?',
    },
];

class SVG {
    constructor() {
        this.name = '',
        this.shape = '',
    };
}
render() {
    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${shape} ${name}</svg>
}
setText(name) {
    this.name = <text x="100" y="100" font-weight="bold" text-anchor="middle">${name}${color}</text>
} 
setShape(shape) {
    this.shape = shape.render
}
function init() {
    inquirer.prompt
}