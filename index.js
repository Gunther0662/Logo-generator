const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const {Circle, Square, Triangle} = require('./lib/shapes');

class CLI {
    run(){
        return inquirer.prompt([    
        {
            type: 'input',
            name: 'logo',
            message: 'What is the name of your Logo?', 
        },
    
        {
            type: 'input',
            name: 'name',
            message: 'What color in the text of yor Logo?',
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
    ])

    .then (({logo, name, shape, shapecolor}) => {
        let shapeChoice;
        switch(shape) {
            case 'Circle':
                shapeChoice = new Circle()
                break;
            case 'Square':
                    shapeChoice = new Square()
                    break;
            default:
                    shapeChoice = new Triangle()
                    break;
        }
shapeChoice.addcolor(shapecolor)
const svg = new SVG()
svg.setText(logo, name);
svg.setShape(shape)
return writeFile("Logo.svg", svg.render())
    })
    }
}
class SVG {
    constructor() {
        this.textElement = ''
            this.shapeElement = ''
    }

    render() {
       return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement} ${this.textElement}</svg>`
    };

    setText(text, color) {
        this.textElement = `<text x="100" y="100" font-weight="bold" text-anchor="middle">${text}${color}</text>`
    };

    setShape(shape) {
        this.shapeElement = shape.render()
    };
};
new CLI().run()
module.exports={SVG,CLI}