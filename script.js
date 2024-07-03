var inp1=document.querySelector("#right #inp1");

var inp2=document.querySelector("#right #inp2" );

var btn=document.querySelector("#right button");

var par=document.querySelector("#right p");

btn.addEventListener("click",function(){
      if(inp1.value===""){
        par.textContent="Enter first name";
      }
      else{
        par.textContent="";
      }
})