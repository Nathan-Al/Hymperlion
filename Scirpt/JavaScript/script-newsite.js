let nomsite = document.getElementById('nomfichier');
let warning_message = document.createElement("p");
let button_submit = document.getElementById('buttonSubmit');
let p_warning = document.getElementById('warning_p');

button_submit.addEventListener('click', function(e) {
    if (nomsite.addEventListener('input', function(event) {})) {
        p_warning.innerHTML = "Mauvaise entrée ! ";
    }
    //e.preventDefault();
    //e.stopPropagation();
})

if (nomsite === "" || nomsite === null) {
    nomsite.style.backgroundColor = "#FF0000";
}

var request = new XMLHttpRequest();
request.open("GET", "http://url-service-web.com/api/users");
request.send();