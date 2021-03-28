var CORRECT_USER = 'nguyendinhviet';
var CORRECT_PASS = 123; 

var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("password");


function login(e) {
    var username = inputUsername.value;
    var password = inputPassword.value;

    if(username == CORRECT_USER && password == CORRECT_PASS) {
        alert('Đăng nhập thành công');
    } else {
        alert('Đăng nhập thất bại');
    }
}
