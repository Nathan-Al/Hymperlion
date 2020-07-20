const box = document.querySelector('.box');
const loader = document.querySelector('.loader');
const txt = document.querySelector('txt');

window.addEventListener('load', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(repinse => {
            console.log(reponse);
            return reponse.json();
        })
        .then(data => {
            console.log(data);
            Text.innerHtml = data.body;
            loader.className += "hidden";
        })
});