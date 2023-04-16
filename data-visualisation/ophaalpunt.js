//const vanimg = document.querySelector(".vanimg");
//const vanimgnh = document.querySelector(".vanimgnh");
//const parcelboximg = document.querySelector(".parcelboximg");
//ophaalbutton.setAttribute('id', 'op');

function ophaalpunt() {
    document.getElementById("rectfill").style.height="120px";
    document.getElementById("rectfill").style.transition="all 4s";
    /*van image beweegt naar ophaalbunt*/
    ophaalbutton.style.display = 'none';
    vanimg.style.margin = "200px 350px";
    vanimg.style.transition="all 7s";
    
    /*parcelbox image gaat mee naar ophaalpunt*/
    parcelboximg.src = "img/parcelbox.svg";
    parcelboximg.style.margin = "420px 480px";
    parcelboximg.style.transition="all 7s";

    buttonOphalen.innerText = 'Ok';
    setTimeout(function()
    {typeWriter5();}, 7000);
    setTimeout(function()
    {document.body.appendChild(buttonOphalen);}, 15000);
}

buttonOphalen.addEventListener('click', () => {
    document.getElementById("rectfill").style.height="100px";
    document.getElementById("rectfill").style.transition="all 4s";
    /*van image beweegt naar ophaalbunt*/
    buttonOphalen.style.display = 'none';
    vanimg.style.margin = "200px 1750px";
    vanimg.style.transition="all 7s";

/*parcelbox image gaat mee naar ophaalpunt*/
    parcelboximg.src = "img/parcelbox.svg";
    parcelboximg.style.margin = "440px 450px";
    parcelboximg.style.transition="all 7s";
    setTimeout(function()
    {
    document.body.appendChild(buttonNext);
    buttonNext.innerHTML = "<a href='/ending.html'>Volgende</a>";
    }, 3000);
})


    