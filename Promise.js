/**
 * Promise là khái niệm được sinh ra để xử lý các thao tac bất đồng bộ
 * 
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
        console.log('Successully');
    })
    .catch(function() {
        console.log('Failure');
    })
    .finally(function() {
        console.log('Done');
    })