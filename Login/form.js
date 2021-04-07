

// function getValue(id) {
//     return document.getElementById(id).value.trim();
// }

// function showError(key, mess) {
//     document.getElementById(key + '-error').innerHTML = mess;
// }

// function validate() {
//     // Username
//     var username = getValue('username');
//     if (username == ''){
//         showError('username','Username không hợp lệ');
//     }
//     else if (username.length < 5) {
//         showError('username','Username phải lớn hơn 5 kí tự');
//     }
//     else if (!/[a-zA-Z0-9]/.test(username)) {
//         showError('username','Username phải đúng định dạng');
//     }
//     else {
//         showError('username','');
//     }


//     // Password
//     var password = getValue('password');
//     var repassword = getValue('repassword');
//     if (password == '' || password.length < 8 || password != repassword) {
//         showError('password','Password không hợp lệ');
//     }else {
//         showError('password', '');
//     }

//     var phone = getValue('phone');

//     if (phone != '' && !/^[0-9]{10}$/.test(phone)){
//         showError('phone','Phone không hợp lệ');
//     }else {
//         showError('phone', '');
//     }

//     var email = getValue('email');
//     var mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!mailFormat.test(email)) {
//         showError('email','Email không hợp lệ');
//     }else {
//         showError('email', '');
//     }

  
// }

var CORRECT_USER = 'nguyendinhviet';
var CORRECT_PASS = 123;

function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(key, mess) {
    document.getElementById(key + '-error').innerHTML = mess;
}

function validate() {
    var username = getValue('username');
    var password = getValue('password');
    if (username != CORRECT_USER) {
        showError('username','Tên đăng nhập không đúng');
        console.log(username);
    }else {
        showError('username', '');
    }

    if (password != CORRECT_PASS) {
        showError('password', 'Mật khẩu không đúng');
    }else {
        showError('password', '');
    }

    if (username == CORRECT_USER && password == CORRECT_PASS) {
        showError('show', 'ĐĂNG NHẬP THÀNH CÔNG !!!');
    }else {
        showError('show', '');
    }

}