// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// function reverse(str) {
//     var string = str.split("")
//     var reversedArray = string.reverse();
//     var joined = reversedArray.join("")
//     return joined;
// }

// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//         console.log(reversed)
//     }
//     return reversed;
// }