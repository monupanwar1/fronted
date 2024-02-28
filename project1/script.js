var btn = document.querySelector(".btn");
var btn2 = document.querySelector(".btn2");
var content = document.querySelector("#content");
var text = document.querySelector(".text");
var hexColor = ""; // Declare hexColor outside the event listeners

btn.addEventListener("click", () => {
    let characterset = '0123456789ABCDEF';
    hexColor = "";
    for (let i = 0; i < 6; i++) {
        hexColor += characterset.charAt(Math.floor(Math.random() * characterset.length));
    }
    text.textContent = `#${hexColor}`;
    content.style.backgroundColor = `#${hexColor}`;
});

btn2.addEventListener('click', () => {
    if (hexColor) {
        navigator.clipboard.writeText(hexColor)
            .then(() => {
              alert('Color code copied to clipboard!');
            })
            .catch(err => {
               
                alert('Failed to copy color code!');
            });
    } else {
        alert('Generate a color first before copying to clipboard!');
    }
});
