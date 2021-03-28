var inputElement = document.querySelector('input');
var checkboxElement = document.querySelector('input[type="checkbox"]');
inputElement.onchange = function(e){
    console.log(e.target.value);
    // document.getElementById('demo').innerHTML = e.target.value;
};

checkboxElement.onclick = function(e){
    console.log(e.target.value);
} 