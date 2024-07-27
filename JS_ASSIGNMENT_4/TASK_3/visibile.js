function toggleVisibility() {

    let btn = document.querySelector("button");
    let para =document.getElementById("useless-paragraph");
   


    btn.addEventListener("click",()=>
    {
        let vis = window.getComputedStyle(para).visibility;
        if (vis === "hidden") {
            para.style.visibility = "visible";
        } else {
            para.style.visibility = "hidden";
        }
    })
    
}

toggleVisibility();


