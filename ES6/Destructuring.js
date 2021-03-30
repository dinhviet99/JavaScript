
var array = ['Java','Php','nodejs'];

var [a, b, c] = array;

console.log(a,b,c);
// 
function logger([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
logger([2,4,5,6]);