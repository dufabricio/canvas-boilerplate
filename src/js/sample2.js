import utils from './utils'
import { of } from 'rxjs/observable/of'

let sample2 = () => {
    let canvas = document.querySelector('canvas.sample2')
    if(canvas){

        const c = canvas.getContext('2d')

        canvas.width = innerWidth
        canvas.height = innerHeight

        const mouse = {
            x: 10,
            y: 10
        }

        const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
        function randomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
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
        function Particle(x, y, radius, color) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.velocity = {
                x: Math.random() - 0.5,
                y: Math.random() - 0.5
            }
        }

        Particle.prototype.draw = function() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            c.fillStyle = this.color
            c.fill()
            c.closePath()
        }

        Particle.prototype.update = function(particles) {

            this.draw();

            for(let i = 0; i < particles.length; i++){
                if(this === particles[i]){ continue }

                if(getDistance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0){
                    this.velocity.x = this.velocity.x * (-1);
                    this.velocity.y = this.velocity.y * (-1);
                }

                let stageLeft = radius*2; 
                let stageRight = innerWidth-radius*2
                let stageTop = radius*2; 
                let stageBottom = innerHeight-radius*2

                if(this.x < stageLeft){
                    this.x = stageLeft
                    this.velocity.x = this.velocity.x * (-1);
                }

                if(this.x > stageRight){
                    this.x = stageRight;
                    this.velocity.x = this.velocity.x * (-1);
                }

                if(this.y < stageTop){
                    this.y = stageTop
                    this.velocity.y = this.velocity.y * (-1);
                }

                if(this.y > stageBottom){
                    this.y = stageBottom;
                    this.velocity.y = this.velocity.y * (-1);
                }
            }

            this.x += this.velocity.x;
            this.y += this.velocity.y;

            
        }

        // Collision Detect
        function getDistance(x1,y1,x2,y2){
            let xDistance = x1 - x2;
            let yDistance = y1 - y2;
            return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance, 2));
        }

        // Implementation
        let particles;
        let radius = 20;
              
        function init() {
            particles = [];
            
            for(let i = 0; i < 50; i++){
              let x = Math.random() * innerWidth;
              let y = Math.random() * innerHeight;
              let color = randomColor();

              if(i !== 0){
                  for(let j = 0; j < particles.length; j++){
                     if(getDistance(x, y,particles[j].x, particles[j].y) - radius * 2 < 0){
                        x = Math.random() * innerWidth;
                        y = Math.random() * innerHeight;
                        j = j-1;                
                     }
                  }
              }

              particles.push(new Particle(x,y,radius,color));
            }
        }

        // Animation Loop
        function animate() {

            requestAnimationFrame(animate)
            c.clearRect(0, 0, canvas.width, canvas.height)

            if(canvas.style.display == 'block'){
                
                particles.forEach((particle)=>{
                    particle.update(particles);
                });

            }
        }

        init()
        animate()
    }
}
sample2();
