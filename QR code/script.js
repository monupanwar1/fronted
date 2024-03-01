var imgbox = document.querySelector("#img-box");
var image = document.querySelector("#QR-img");
var inputtext = document.querySelector("#input");
var btn = document.querySelector("#btn");
var text = document.querySelector("#text");

btn.addEventListener("click", () => {
    Qrgenerate();
});

var Qrgenerate = () => {
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example " + inputtext.value;
    text.textContent="QR generated";
};
