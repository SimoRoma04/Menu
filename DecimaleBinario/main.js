
console.log("Loaded!");

var paragraph = document.createElement("p");
paragraph.className = "output-str"; 
const element = document.getElementById("output");

// Decimale
function convert() {
    var decimal = document.getElementById("f-field").value;
    var binary = Number(decimal).toString(2);
    var text = document.createTextNode(binary + "\n");
    paragraph.appendChild(text);
    element.appendChild(paragraph);
}


document.getElementById("submit").addEventListener("click", function() {
    convert();
});