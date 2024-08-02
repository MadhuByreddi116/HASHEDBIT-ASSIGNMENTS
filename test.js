const btn = document.querySelector("#btn");

let mode = "light";
let body = document.querySelector("body");

btn.addEventListener("click",()=>{
    if(mode==="light"){
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        body.classList.add("light");
        body.classList.remove("dark");
    }
    
console.log(mode);
});