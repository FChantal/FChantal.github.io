const vanimg = document.querySelector(".vanimg");
const vanimgnh = document.querySelector(".vanimgnh");
const parcelboximg = document.querySelector(".parcelboximg");
const buttonHome = document.createElement('button');
const buttonNotHome = document.createElement('button');
const buttonNext = document.createElement('button');
const buttonOphalen = document.createElement('button');
const buttonOphalenNext = document.createElement('button');
const rectfill = document.querySelector(".rectfill");
buttonHome.setAttribute('id', 'bh');
buttonNotHome.setAttribute('id', 'bnh');
buttonNext.setAttribute('id', 'bn');
buttonOphalen.setAttribute('id', 'bo');
buttonOphalenNext.setAttribute('id', 'bon');

function myFunction() {
    /*van image beweegt naar huis*/
    btnID.style.display = 'none';
    vanimg.style.margin = "200px 1040px";
    vanimg.style.transition="all 7s";
    
    document.getElementById("rectfill").style.height="100px";
    document.getElementById("rectfill").style.transition="all 7s";

    /*parcelbox image gaat mee naar huis*/
    parcelboximg.src = "img/parcelbox.svg";
    parcelboximg.style.margin = "420px 1080px";
    parcelboximg.style.transition="all 7s";

    /*text komt te voorschijn*/
    if (vanimg.style.margin = "200px 1040px") 
    {
        setTimeout(function()
        {typeWriter1();}, 8000);
    }

    if (vanimg.style.margin = "200px 1040px") 
    {
        setTimeout(function()
    {
        {/*gebruiker kies home optie*/
            buttonHome.innerText = 'Ik ben thuis';
            buttonHome.addEventListener('click', () => {
                document.getElementById("rectfill").style.height="80px";
                document.getElementById("rectfill").style.transition="all 4s";
                bh.style.display = 'none';
                bnh.style.display = 'none';
                /*text komt te voorschijn*/
                document.getElementById("pakketAangekomenTekst").textContent="";
                typeWriter2()
                /*pakket wordt geleverd en busje rijd weg*/
                if (vanimg.style.margin = "200px 1060px") {
                {
                    vanimg.style.transition.delay="7s"
                    vanimg.style.margin = "200px 1550px"
                    vanimg.style.transition="all 7s";
                    parcelboximg.style.margin = "450px 1080px";
                    document.body.appendChild(buttonNext)
                    buttonNext.innerHTML = "<a href='/ending.html'>Volgende</a>";
                }}
            })
            document.body.appendChild(buttonHome)
            /*gebruiker kies not home optie*/
            buttonNotHome.innerText = 'Ik ben niet thuis'
            buttonNotHome.addEventListener('click', () => 
            {
                document.getElementById("rectfill").style.height="80px";
                document.getElementById("rectfill").style.transition="all 4s";
                bnh.style.display = 'none';
                bh.style.display = 'none';
                /*text komt te voorschijn*/
                document.getElementById("pakketAangekomenTekst").textContent="";
                typeWriter3()
                /*busje rijd weg uit het scherm samen met pakje*/
                if (vanimg.style.margin = "200px 1040px") {
                   
                    {
                        vanimg.style.transition.delay="7s"
                        vanimg.style.margin = "200px 1750px"
                        vanimg.style.transition="all 7s";
                        parcelboximg.style.margin = "400px 1850px";
                        buttonOphalen.innerText = 'Ok';
                        setTimeout(function(){
                        document.body.appendChild(buttonOphalen);
                        }, 9000)
                    }}
                /*reverse busje rijd met pakketje naar ophaalpunt*/
                buttonOphalen.addEventListener('click', () => {
                document.getElementById("rectfill").style.height="30px";
                document.getElementById("rectfill").style.transition="all 4s";
                if (vanimg.style.margin = "200px 1750px") {
                    setTimeout(function(){
                        {
                        buttonOphalenNext.innerText = 'Ok';
                        vanimgnh.style.margin = "200px 180px";
                        vanimgnh.style.transition="all 7s"; 
                        parcelboximg.style.transition="all 6s";    
                        vanimgnh.style.transition.delay="7s"
                        parcelboximg.style.transition.delay="6s"
                        parcelboximg.style.margin = "420px 270px";
                        document.body.appendChild(buttonOphalenNext);
                        bo.style.display = 'none';
                    setTimeout(function(){
                        {
                        /*text komt te voorschijn*/
                        document.getElementById("pakketAangekomenTekst").textContent="";
                        typeWriter4();
                        }}, 7000);
                        }}, 0);}})

                buttonOphalenNext.addEventListener('click', () => {
                document.getElementById("rectfill").style.height="10px";
                document.getElementById("rectfill").style.transition="all 4s";
                        if (vanimgnh.style.margin = "200px 50px") {
                            setTimeout(function(){
                                {
                                vanimgnh.style.margin = "200px -1000px";
                                vanimgnh.style.transition="all 7s";   
                                vanimgnh.style.transition.delay="7s"
                                parcelboximg.style.margin = "450px 270px";
                                bon.style.display = 'none';
                                document.body.appendChild(buttonNext);
                                buttonNext.innerHTML = "<a href='/ending.html'>Volgende</a>";
                                }}, 500);}})
            })
            document.body.appendChild(buttonNotHome) 
        }
    }, 13000);}
}

