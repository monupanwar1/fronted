var prg=document.querySelector("#progress");
var  h3 =document.querySelector("h3");

var count=0;





 var interval =setInterval(() => {
     
     
     if(count==100){
        h3.style.display="initial"
         clearInterval(int);
        }
        count++;
        prg.style.width=count+"%";
        
    
   


    
},50);