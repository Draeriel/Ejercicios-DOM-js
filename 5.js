
window.onload = function() {

    let ul = document.createElement("ul");

    for (let i = 0; i < document.images.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = document.images[i].alt;
        ul.appendChild(li);
        console.log(document.images[i].alt);
    }

    document.body.insertBefore(ul, document.body.firstChild);
}