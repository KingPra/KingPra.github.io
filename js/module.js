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