/**
 * Promise là khái niệm được sinh ra để xử lý các thao tac bất đồng bộ
 * Có 3 trạng thái
 * - Pending
 * - Fulfilled
 * - Rejected
 */

// Promise nhận vào contructor 1 func
var promise = new Promise(
    // Execulor
    function (resolve, reject) {
        // Login
        // Thành công: resolve()
        // Thất bại: reject()
        resolve()
    }
)

promise
    .then(function() {
        console.log('Successfully');
    })
    .catch(function() {
        console.log('Failure');
    })
    .finally(function() {
        console.log('Done');
    })


// function sleep(ms){
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000)
//     .then(function (){
//         console.log(1);
//         return sleep(1000);
//     })
//     // Nếu return 1 promise thì then ở sau phải chờ then đầu tiên chạy 
//     .then(function (){
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject('Có lỗi !!!');
//         })
//     })
//     .then(function (){
//         console.log(3);
//         return sleep(1000);
//     })

//     .catch(function (err){
//         console.log(err);
//     })


var promise1 = new Promise(function (resolve){
    setTimeout(function(){
        resolve([1]);
    },1000)
})

var promise2 = new Promise(function (resolve){
    setTimeout(function(){
        resolve([2,3,4,5]);
    },1000)
})

Promise.all([promise1, promise2])
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    })

