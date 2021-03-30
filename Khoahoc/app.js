
var coursesApi = 'http://localhost:3000/courses';

function start(){
    getCourses(function(courses){
        renderCourses(courses)
    })

    handleCreateForm()
}
start()

function getCourses (callBack) {
    fetch(coursesApi)
        .then (function (response){
            return response.json();
        })
        .then (callBack)
}

function renderCourses(courses){
    var listCourses = document.querySelector('#list-courses');

    var htmls = courses.map(function (course){
        return `
            <li>
                <h2>${course.name}</h2>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourses(${course.id})">Xóa</button>
            </li>
        `
    });

    listCourses.innerHTML = htmls.join('');
}

function createCourses(data, callBack){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        .then (function (response){
            return response.json();
        })
        .then (callBack);
}

function handleDeleteCourses(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(coursesApi + '/' + id, options)
        .then (function (response){
            return response.json();
        })
        .then (callBack);
}

function handleCreateForm(){
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        formData = {
            name: name,
            description: description,
        }

        createCourses(formData)
    }


}