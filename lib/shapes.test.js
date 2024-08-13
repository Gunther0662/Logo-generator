const  {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    Text ('should render the shape circle', () => {
        const name = 'NIC';
        const shape = new Circle();
        const color = new Blue();
        expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" stroke-width="5"/>`);
    });
});
describe('Square', () => {
    Text ('Should render the shape square', () => {
        const name = 'NIC';
        const shape = new Square();
        const color = new Red();
        expect(shape.render()).toEqual(`<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="${this.color}" stroke-width="5"/>`);
    });
});
describe('Triangle', () => {
    Text ('Should render the shape triangle', () => {
        const name = 'NIC';
        const shape = new Triangle();
        const color = new Baby-Blue();
        expect(shape.render()).toEqual(`<polygon points="100,10 40,198 190,78" fill="${this.color}"/>`);
    });
});