var input = document.querySelector("input");
var person = document.querySelector(".people");

var data = [
    {name: "harsh", src: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshita", src: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshika", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "syam", src: "https://plus.unsplash.com/premium_photo-1664351560745-a14ed7bfee3d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

var pers = "";
data.forEach((elem) => {
    pers += `
    <div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h4>${elem.name}</h4>
    </div>`;
});

person.innerHTML = pers;

input.addEventListener("input", () => {
    var matching = data.filter((e) => {
        return e.name.startsWith(input.value);
    });
  
    var newPers = ""; // Corrected variable name from 'newuser' to 'newPers'
    matching.forEach((elem) => {
        newPers += `
        <div class="person">
            <div class="img">
                <img src="${elem.src}" alt="">
            </div>
            <h4>${elem.name}</h4>
        </div>`;
    });
  
    person.innerHTML = newPers;
});
