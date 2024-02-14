var main = document.querySelector("#main");
var button =document.querySelector("button");
var h4=document.querySelector("#txt");



var arr = [
    { name: "kunal",status:"starngers", img:"k"},
    { name: "sand",status:"stranger" ,img:"kunal"},
    { name: "monu" ,status:"stranger",img:"l"}
  ];


  var hero = "";
  arr.forEach(function(val) {
    hero += `
      <div class="card">
        <div class="circle">
        <img src="${val.img}">
        </div>
        <h4>${val.name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h4 id="txt">${val.status}</h4>
        <button>add</button>
      </div>
    `;
  });

  main.innerHTML = hero;



  button.addEventListener("click",function(){
    h4.textContent="friend";



  })