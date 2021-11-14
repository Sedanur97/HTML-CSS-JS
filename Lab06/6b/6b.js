setTimeout(appendElement, 5000);

function appendElement() {
    var paragraf = document.createElement("p");
    var text = document.createTextNode(" Write a JS function that will add a paragraph of text to the page after 5 seconds from opening the page");
    paragraf.appendChild(text);
    var body = document.querySelector("body");
    body.appendChild(paragraf);
}