import utils from './utils'

let sample3 = () => {
    let canvas = document.querySelector('canvas.sample3')
    if(canvas){

        const c = canvas.getContext('2d')

        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 38.4;

        canvas.width = w;
        canvas.height = h;

        const mouse = {
            x: 10,
            y: 10
        }

        const colors = ['#db5f2a', '#900', '#f08f11', '#f2c705']
        
        function randomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min  + 1) + min);
        }

        // Event Listeners
        addEventListener('mousemove', event => {
            mouse.x = event.clientX
            mouse.y = event.clientY
        })

        addEventListener('resize', () => {
            canvas.width = w;
            canvas.height = h;

            init()
        })

        // Objects
        function Ball(x, y, dx, dy, radius, color) {
            this.x = x
            this.y = y
            this.dy = dy
            this.dx = dx
            this.radius = radius
            this.color = color
        }

        Ball.prototype.draw = function() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
            c.closePath()
        }

        Ball.prototype.update = function() {
            let groundHit = this.y + this.radius > canvas.height;
            if(groundHit){
                this.dy = -this.dy * friction;
                this.dx = this.dx * friction;    
            } else {
                this.dy += gravity;
            }

            let sideHit = (this.x - this.radius >= canvas.width) || (this.x + this.radius <= 0);
            if(sideHit){
                this.dx = this.dx * (-1);
            }

            console.log(this.dy);

            this.x += this.dx;
            this.y += this.dy;
            this.draw()
        }

        // Implementation
        let balls;

        // Phisic Constants
        const gravity = 1;
        const friction = 0.89;
        const countBalls = 50;

        function init() {

             balls = [];

             for(let i = 0 ; i < countBalls; i++){
                let x = randomIntFromRange(0,canvas.width); 
                let y = randomIntFromRange(50,canvas.width/3);
                let dx = randomIntFromRange(-2,2);
                let radius = randomIntFromRange(5,20); 
                balls.push(new Ball(x,y, 5, dx, radius,randomColor()));
             }
        }

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate)
            c.clearRect(0, 0, canvas.width, canvas.height)

            if(canvas.style.display == 'block'){
                balls.forEach(ball => {
                    ball.update(); 
                });
            }
        }

        init()
        animate()
    }
}
sample3();