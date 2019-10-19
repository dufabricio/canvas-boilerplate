import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Sprite(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
}

Sprite.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

Sprite.prototype.update = function() {
    this.draw()
}

// Collision Detect
function getDistance(obj1,obj2){
    let xDistance = obj2.x - obj1.x;
    let yDistance = obj2.y - obj1.y;
    return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance, 2));
}

// Implementation
let circle1;
let circle2;
function init() {
    circle1 = new Sprite(canvas.width/2,canvas.height/2,50,'black');
    circle2 = new Sprite(undefined,undefined,50,'red');
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();
}

init()
animate()
