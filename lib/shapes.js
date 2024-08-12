const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class Shapes {
    constructor() {
        this.title = '';
        this.logo = [];
    }
run() {
    return inquirer
    .createPromptModule([
       {
        type: 'input',
        name: 'name',
        message: 'Please enter your logo name',
       }, 
    ])
    .then(({ name }) => {
        this.title = `${name}`;
        return this.addLogo(); 
    })
}
}