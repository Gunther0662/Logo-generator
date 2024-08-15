class Shapes{
    constructor(){
        this.color = "";
    }
    addcolor(color){
        this.color=(color);
    }
}

class Circle {
    render(){
    return  `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" stroke-width="5"/>`
    }
}
class Square {
    render(){
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="${this.color}" stroke-width="5"/>`
    }
}
class Triangle {
    render(){
        return `<polygon points="100,10 40,198 190,78" fill="${this.color}"/>`
    }
}
module.export = {Circle, Square, Triangle}