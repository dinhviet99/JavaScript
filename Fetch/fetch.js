var apiUser = "https://jsonplaceholder.typicode.com/users";

fetch(apiUser)
    .then (function (response){
        return response.json()
    })
    .then (function (users) {
        var htmls = users.map(function (user){
            return `<h2>${user.name}</h2>
            <h2>${user.username}</h2>
            `
        })

        var html = htmls.join('');

        document.getElementById('demo').innerHTML = html;
    })

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
