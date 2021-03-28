//Switch

var date = 2;

switch(date){
    case 2:
        console.log('hôm nay là thứ 2');
        break;
    case 3:
        console.log('hôm nay là thứ 3');
        break;
    case 4:
        console.log('hôm nay là thứ 4');
        break;
    case 5:
        console.log('hôm nay là thứ 5');
        break;
    default:
        console.log('không biết');
}

//Loop for
var myArray =[
    'java',
    'php',
    'ruby'
]
var arrayLength = myArray.length

for(var i = 0; i < arrayLength; i++){
console.log(myArray[i])
}

// For/in Loop 

var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
    'Node js'
]

for (var key in languages) {
    console.log(key);
}

var myInfo = {
    name: 'Viet',
    age: 22
}

for (var value of Object.keys(myInfo)){
    console.log(value);
}