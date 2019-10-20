/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sample = __webpack_require__(/*! ./sample1.js */ "./src/js/sample1.js");

var _sample2 = _interopRequireDefault(_sample);

var _sample3 = __webpack_require__(/*! ./sample2.js */ "./src/js/sample2.js");

var _sample4 = _interopRequireDefault(_sample3);

var _sample5 = __webpack_require__(/*! ./sample3.js */ "./src/js/sample3.js");

var _sample6 = _interopRequireDefault(_sample5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadSample = function loadSample(sampleName) {
    var samples = document.querySelectorAll('canvas');
    samples.forEach(function (sample) {
        if (sample.getAttribute('class') === sampleName) {
            sample.style.display = 'block';
        } else {
            sample.style.display = 'none';
        }
    });
};

document.querySelectorAll('ul.menu li').forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
        loadSample(menuItem.getAttribute("class"));
    });
});

/***/ }),

/***/ "./src/js/sample1.js":
/*!***************************!*\
  !*** ./src/js/sample1.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sample1 = function sample1() {
        var canvas = document.querySelector('canvas.sample1');
        if (canvas) {

                // Objects
                var Sprite = function Sprite(x, y, radius, color) {
                        this.x = x;
                        this.y = y;
                        this.radius = radius;
                        this.color = color;
                };

                // Collision Detect
                var getDistance = function getDistance(obj1, obj2) {
                        var xDistance = obj2.x - obj1.x;
                        var yDistance = obj2.y - obj1.y;
                        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                };

                // Implementation


                var init = function init() {
                        circle1 = new Sprite(canvas.width / 2, canvas.height / 2, 50, 'black');
                        circle2 = new Sprite(10, 10, 50, 'red');
                };

                // Animation Loop
                var animate = function animate() {

                        requestAnimationFrame(animate);
                        c.clearRect(0, 0, canvas.width, canvas.height);

                        if (canvas.style.display == 'block') {

                                if (getDistance(circle1, circle2) < circle1.radius + circle2.radius) {
                                        circle1.color = 'red';
                                        status.innerHTML = "Collision Detected !";
                                } else {
                                        circle1.color = 'black';
                                        status.innerHTML = "";
                                }

                                circle2.x = mouse.x;
                                circle2.y = mouse.y;

                                circle1.update();
                                circle2.update();
                        }
                };

                var c = canvas.getContext('2d');

                var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 38.4;

                canvas.width = w;
                canvas.height = h;

                var mouse = {
                        x: 10,
                        y: 10

                        // Event Listeners
                };addEventListener('mousemove', function (event) {
                        mouse.x = event.clientX;
                        mouse.y = event.clientY;
                });

                addEventListener('resize', function () {
                        canvas.width = w;
                        canvas.height = h;

                        init();
                });

                Sprite.prototype.draw = function () {
                        c.beginPath();
                        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                        c.fillStyle = this.color;
                        c.fill();
                        c.closePath();
                };

                Sprite.prototype.update = function () {
                        this.draw();
                };var circle1 = void 0;
                var circle2 = void 0;

                var status = document.getElementById("status");

                init();
                animate();
        }
};
sample1();

/***/ }),

/***/ "./src/js/sample2.js":
/*!***************************!*\
  !*** ./src/js/sample2.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sample2 = function sample2() {
    var canvas = document.querySelector('canvas.sample2');
    if (canvas) {
        var randomColor = function randomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        };

        var randomIntFromRange = function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        // Event Listeners


        // Objects
        var Particle = function Particle(x, y, radius, color) {
            var mass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
            var material = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "plastic";

            this.x = x;
            this.y = y;
            this.radius = radius;
            this.material = material;
            this.color = color;
            this.mass = mass;
            this.velocity = {
                x: Math.random() - 0.5,
                y: Math.random() - 0.5
            };
        };

        // Calculo da distancia entre dois o objetos para a deteccao de colisao 
        // Aplicacao do Teorema de Pitagoras ( c = a^2 + b^2 )
        var getDistance = function getDistance(x1, y1, x2, y2) {
            var xDistance = x1 - x2;
            var yDistance = y1 - y2;
            return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
        };

        /**
         * Rotaciona o sistema de cordenadas para a velocidade
         *
         * Altera as velocidades para uma situacao aonde o sistema de cordenadas esteja rotacionado
         * Retorna as novas velocidade x e y apos a rotacao
         */


        var rotate = function rotate(velocity, angle) {
            var rotatedVelocities = {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
            };

            return rotatedVelocities;
        };

        // Calculo de troca de energia no momento da colisao entre duas particulas
        // Equacao para Reacao de colisao Elastica ( Elastic collision on Wikipedia )
        // Aplica Equacao Newtoniana de Uma dimensao


        var resolveCollision = function resolveCollision(particle, otherPaticle) {

            var xVelocityDiff = particle.velocity.x - otherPaticle.velocity.x;
            var yVelocityDiff = particle.velocity.y - otherPaticle.velocity.y;

            var xDist = otherPaticle.x - particle.x;
            var yDist = otherPaticle.y - particle.y;

            // evita a sobreposicao acidental das particulas
            if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

                // Define o angulo entre as duas particulas no momento da colisao
                var angle = -Math.atan2(otherPaticle.y - particle.y, otherPaticle.x - particle.x);

                // variaveis das massas para facilitar a leitura da equacao
                var m1 = particle.mass;
                var m2 = otherPaticle.mass;

                // velocidade antes da equacao de 1d ( 1 dimensao ) 
                var u1 = rotate(particle.velocity, angle);
                var u2 = rotate(otherPaticle.velocity, angle);

                // velocidade depois da equacao de 1d 
                var v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
                var v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

                // velocidade final ao rotacionar para o angulo de origem novamente
                var vFinal1 = rotate(v1, -angle);
                var vFinal2 = rotate(v2, -angle);

                // trocando a velocidade entre as particulas para causar um efeito de rebote mais natural

                particle.velocity.x = vFinal1.x;
                particle.velocity.y = vFinal1.y;
                otherPaticle.velocity.x = vFinal2.x;
                otherPaticle.velocity.y = vFinal2.y;

                if (particle.material !== 'iron') {
                    particle.color = randomColor();
                };
                if (otherPaticle.material !== 'iron') {
                    otherPaticle.color = randomColor();
                };
            }
        };

        // trata a colisao nos extremos do canvas


        var resolveCollisionStageLimits = function resolveCollisionStageLimits(particle) {

            if (particle.x - radius <= 0 || particle.x + radius >= w) {
                particle.velocity.x = particle.velocity.x * -1;
            }

            if (particle.y - radius <= 0 || particle.y + radius >= h) {
                particle.velocity.y = particle.velocity.y * -1;
            }
        };

        // Implementation


        var createParticle = function createParticle(radius, color, mass, material) {
            var x = randomIntFromRange(radius, canvas.width - radius);
            var y = randomIntFromRange(radius, canvas.height - radius);

            for (var j = 0; j < particles.length; j++) {
                if (getDistance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                    x = randomIntFromRange(radius, canvas.width - radius);
                    y = randomIntFromRange(radius, canvas.height - radius);
                    j = j - 1;
                }
            }

            return new Particle(x, y, radius, color, mass, material);
        };

        var init = function init() {
            particles = [];

            for (var i = 0; i < countParticles; i++) {
                particles.push(createParticle(radius, randomColor()));
            }

            // Create Iron Balls
            particles.push(createParticle(30, 'black', 5, "iron"));
            particles.push(createParticle(30, 'black', 5, "iron"));
            particles.push(createParticle(30, 'black', 5, "iron"));
            particles.push(createParticle(60, 'black', 5, "iron"));
        };

        // Animation Loop


        var animate = function animate() {

            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);

            if (canvas.style.display == 'block') {

                particles.forEach(function (particle) {
                    particle.update(particles);
                });
            }
        };

        var c = canvas.getContext('2d');

        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 38.4;

        canvas.width = w;
        canvas.height = h;

        var mouse = {
            x: 10,
            y: 10
        };

        var colors = ['#db5f2a', '#900', '#f08f11', '#f2c705'];

        addEventListener('mousemove', function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        addEventListener('resize', function () {
            canvas.width = w;
            canvas.height = h;

            init();
        });

        Particle.prototype.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
        };

        Particle.prototype.update = function (particles) {

            this.draw();

            for (var i = 0; i < particles.length; i++) {
                if (this === particles[i]) {
                    continue;
                }

                //Collision Detect
                if (getDistance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
                    resolveCollision(this, particles[i]);
                }

                resolveCollisionStageLimits(this);
            }

            // movimenta a particla a cada frame conforme velocidade atual definida apos os calculos de colisao
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };var particles = void 0;
        var radius = 5;
        var countParticles = 400;

        init();
        animate();
    }
};
sample2();

/***/ }),

/***/ "./src/js/sample3.js":
/*!***************************!*\
  !*** ./src/js/sample3.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sample3 = function sample3() {
    var canvas = document.querySelector('canvas.sample3');
    if (canvas) {
        var randomColor = function randomColor() {
            return colors[Math.floor(Math.random() * colors.length)];
        };

        var randomIntFromRange = function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        // Event Listeners


        // Objects
        var Ball = function Ball(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dy = dy;
            this.dx = dx;
            this.radius = radius;
            this.color = color;
        };

        var init = function init() {

            balls = [];

            for (var i = 0; i < countBalls; i++) {
                var x = randomIntFromRange(0, canvas.width);
                var y = randomIntFromRange(50, canvas.width / 3);
                var dx = randomIntFromRange(-2, 2);
                var radius = randomIntFromRange(5, 20);
                balls.push(new Ball(x, y, 5, dx, radius, randomColor()));
            }
        };

        // Animation Loop


        var animate = function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);

            if (canvas.style.display == 'block') {
                balls.forEach(function (ball) {
                    ball.update();
                });
            }
        };

        var c = canvas.getContext('2d');

        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 38.4;

        canvas.width = w;
        canvas.height = h;

        var mouse = {
            x: 10,
            y: 10
        };

        var colors = ['#db5f2a', '#900', '#f08f11', '#f2c705'];

        addEventListener('mousemove', function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        addEventListener('resize', function () {
            canvas.width = w;
            canvas.height = h;

            init();
        });

        Ball.prototype.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
        };

        Ball.prototype.update = function () {
            var groundHit = this.y + this.radius > canvas.height;
            if (groundHit) {
                this.dy = -this.dy * friction;
                this.dx = this.dx * friction;
            } else {
                this.dy += gravity;
            }

            var sideHit = this.x - this.radius >= canvas.width || this.x + this.radius <= 0;
            if (sideHit) {
                this.dx = this.dx * -1;
            }

            console.log(this.dy);

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };

        // Implementation
        var balls = void 0;

        // Phisic Constants
        var gravity = 1;
        var friction = 0.89;
        var countBalls = 50;

        init();
        animate();
    }
};
sample3();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = { randomIntFromRange: randomIntFromRange, randomColor: randomColor, distance: distance };

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map