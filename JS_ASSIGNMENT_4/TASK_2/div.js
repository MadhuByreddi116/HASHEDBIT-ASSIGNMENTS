function createDiv(width,height,text)
{
    const divele  = document.createElement("div");
    divele.style.width=width+"px";
    divele.style.height=height+"px";
    divele.textContent=text;
    divele.style.border="solid";

    let div = document.querySelector("div");

    div.append(divele);
}
createDiv(250,200,"The Div is created, and added inside the container...!");