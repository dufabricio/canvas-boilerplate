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

                canvas.width = innerWidth;
                canvas.height = innerHeight;

                var mouse = {
                        x: 10,
                        y: 10

                        // Event Listeners
                };addEventListener('mousemove', function (event) {
                        mouse.x = event.clientX;
                        mouse.y = event.clientY;
                });

                addEventListener('resize', function () {
                        canvas.width = innerWidth;
                        canvas.height = innerHeight;

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