(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

window.addEventListener('load', function () {

    // Put this anywhere; normal scope rules will apply
let testModule = require('./module'); // import module

//importing object team. 'new' for constructor. - need to look up more info.
// new testModule.Team();

    console.log('ready to rock');
});
},{"./module":2}],2:[function(require,module,exports){
/**
 *  Most commonly, we'll either export functions or objects
 */

// // option 1
// function xyz() {
//     return 10;
// }


// module.exports = xyz;

// //option 2
// module.exports = function xyz() {
//     return 10;
// }

//option 3
module.exports = function () {
    return 10;
}


//objects 
// module.exports = {
//     Team: function () {

//     },
//     Player: function () {

//     },
//     Flag: function () {

//     },
// };
},{}]},{},[1]);
