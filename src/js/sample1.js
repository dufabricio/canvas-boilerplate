import utils from './utils'

let sample1 = () => {
    let canvas = document.querySelector('canvas.sample1')
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
            circle2 = new Sprite(10,10,50,'red');
        }


        let status = document.getElementById("status");

        // Animation Loop
        function animate() {

            requestAnimationFrame(animate)
            c.clearRect(0, 0, canvas.width, canvas.height)

            if(canvas.style.display == 'block'){
                
                if(getDistance(circle1, circle2) < circle1.radius + circle2.radius){
                    circle1.color = 'red';
                    status.innerHTML = "Collision Detected !"
                }else{
                    circle1.color = 'black';
                    status.innerHTML = ""
                }

                circle2.x = mouse.x;
                circle2.y = mouse.y;

                circle1.update();
                circle2.update();
            }
        }

        init()
        animate()
    }
}
sample1();
