function giaiThua(num){
    if(num > 0){
        return num * giaiThua(num - 1);
    }
    return 1;
}
console.log('Giai thừa:',giaiThua(6));

//CallBack
function dayLaFunction(param) {
    if (typeof param === 'function'){
        param('Nguyễn Đình Việt');
    }
}

function callBack(value){
    console.log('Value: '+ value);
}
dayLaFunction(callBack);

