import utils from './utils'

let sample2 = () => {
    let canvas = document.querySelector('canvas.sample2')
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
        function Particle(x, y, radius, color, mass = 1, material = "plastic") {
            this.x = x
            this.y = y
            this.radius = radius
            this.material = material
            this.color = color
            this.mass = mass
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

                //Collision Detect
                if(getDistance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0){
                    resolveCollision(this, particles[i]);
                }

                resolveCollisionStageLimits(this);
            }

            // movimenta a particla a cada frame conforme velocidade atual definida apos os calculos de colisao
            this.x += this.velocity.x;
            this.y += this.velocity.y;

        }

        // Calculo da distancia entre dois o objetos para a deteccao de colisao 
        // Aplicacao do Teorema de Pitagoras ( c = a^2 + b^2 )
        function getDistance(x1,y1,x2,y2){
            let xDistance = x1 - x2;
            let yDistance = y1 - y2;
            return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance, 2));
        }

        /**
         * Rotaciona o sistema de cordenadas para a velocidade
         *
         * Altera as velocidades para uma situacao aonde o sistema de cordenadas esteja rotacionado
         * Retorna as novas velocidade x e y apos a rotacao
         */
        function rotate(velocity, angle) {
            const rotatedVelocities = {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
            };

            return rotatedVelocities;
        }

        // Calculo de troca de energia no momento da colisao entre duas particulas
        // Equacao para Reacao de colisao Elastica ( Elastic collision on Wikipedia )
        // Aplica Equacao Newtoniana de Uma dimensao
        function resolveCollision(particle, otherPaticle){
            
            const xVelocityDiff = particle.velocity.x - otherPaticle.velocity.x;
            const yVelocityDiff = particle.velocity.y - otherPaticle.velocity.y;

            const xDist = otherPaticle.x - particle.x;
            const yDist = otherPaticle.y - particle.y;
            
            // evita a sobreposicao acidental das particulas
            if(xVelocityDiff * xDist + yVelocityDiff * yDist >= 0){

               // Define o angulo entre as duas particulas no momento da colisao
               const angle = -Math.atan2(otherPaticle.y - particle.y, otherPaticle.x - particle.x);

               // variaveis das massas para facilitar a leitura da equacao
               const m1 = particle.mass;
               const m2 = otherPaticle.mass; 

               // velocidade antes da equacao de 1d ( 1 dimensao ) 
               const u1 = rotate(particle.velocity, angle);
               const u2 = rotate(otherPaticle.velocity, angle);

               // velocidade depois da equacao de 1d 
               const v1 = {x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
               const v2 = {x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

               // velocidade final ao rotacionar para o angulo de origem novamente
               const vFinal1 = rotate(v1, -angle);
               const vFinal2 = rotate(v2, -angle);

               // trocando a velocidade entre as particulas para causar um efeito de rebote mais natural

               particle.velocity.x = vFinal1.x;
               particle.velocity.y = vFinal1.y;
               otherPaticle.velocity.x = vFinal2.x;
               otherPaticle.velocity.y = vFinal2.y;

               if(particle.material !== 'iron') { particle.color = randomColor() };
               if(otherPaticle.material !== 'iron') { otherPaticle.color = randomColor() };
            }

        }

        // trata a colisao nos extremos do canvas
        function resolveCollisionStageLimits(particle){
        
            if(particle.x - radius <= 0 || particle.x + radius >= w ){
                particle.velocity.x = particle.velocity.x * (-1);
            }

            if(particle.y - radius <= 0 || particle.y + radius >= h ){
                particle.velocity.y = particle.velocity.y * (-1);
            }
        
        }

        // Implementation
        let particles;      
        let radius = 5;
        let countParticles = 400;

        function createParticle(radius, color, mass, material){
            let x = randomIntFromRange(radius, canvas.width - radius);
            let y = randomIntFromRange(radius, canvas.height - radius);
            
            for(let j = 0; j < particles.length; j++){
                if(getDistance(x, y,particles[j].x, particles[j].y) - radius * 2 < 0){
                    x = randomIntFromRange(radius, canvas.width - radius);
                    y = randomIntFromRange(radius, canvas.height - radius);
                    j = j-1;                
                }
            }
            
            return new Particle(x,y,radius,color,mass,material);
        }

        function init() {
            particles = [];
            
            for(let i = 0; i < countParticles; i++){
              particles.push(createParticle(radius, randomColor()));
            }

            // Create Iron Balls
            particles.push(createParticle(30, 'black', 5, "iron"));
            particles.push(createParticle(30, 'black', 5, "iron"));
            particles.push(createParticle(30, 'black', 5, "iron"));
            particles.push(createParticle(60, 'black', 5, "iron"));
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
