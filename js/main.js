let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
}
// The best functions are those with no parameters!

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function(){
        console.log('draw')
    }
}
circle.draw()

//Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}
const circle2 = createCircle(1)

//Constructor Function
function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}
const another = new Circle(1)

const Circle1 = new Function('radius',` this.radius = radius
this.draw = function(){
    console.log('draw')
} `)

const circle3 = new Circle1(1)