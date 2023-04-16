var i = 0;
var y = 0;
var z = 0;
var q = 0;
var j = 0; 
var txt = '*Ding Dong*... Je pakketje is aangekomen! Ben je thuis om dit pakketje aan te nemen?'; /* The text */
var txt2 = "Fijn, je bent thuis! Het bezorgen van jouw pakketje van het post kantoor naar jou thuis zorgde voor X CO2 uitstoot. Dit is het zelfde als de gemiddelde CO2 uitstoot van het bezorgen van pakketjes."
var txt3 = "Je hebt je pakketje gemist. Je pakketje zal bij de dichtsbijzijnde ophaalpunt bezorgd worden. Het bezorgen van jouw pakketje van het post kantoor naar jou thuis en terug naar een ophaalpunt zorgde voor X CO2 uitstoot. Dit is meer dan de gemiddelde C02 uitstoot van het bezorgen van pakketjes."
var txt4 = "Jouw pakketje is geleverd bij het dichtsbijzijnde ophaalpunt."
var txt5 = "Jouw pakketje is geleverd bij het dichtsbijzijnde ophaalpunt. Het bezorgen van jouw pakketje van het post kantoor naar het dichtsbijzijnde ophaalpunt zorgde voor X CO2 uitstoot. Dit is minder dan de gemiddelde CO2 uitstoot van het bezorgen van pakketjes."
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter1() {
    if (i < txt.length) {
      document.getElementById("pakketAangekomenTekst").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
}

function typeWriter2() {
  if (y < txt2.length) {
    document.getElementById("pakketAangekomenTekst").innerHTML += txt2.charAt(y);
    y++;
    setTimeout(typeWriter2, speed);
  }
}

function typeWriter3() {
  if (z < txt3.length) {
    document.getElementById("pakketAangekomenTekst").innerHTML += txt3.charAt(z);
    z++;
    setTimeout(typeWriter3, speed);
  }
}

function typeWriter4() {
  if (q < txt4.length) {
    document.getElementById("pakketAangekomenTekst").innerHTML += txt4.charAt(q);
    q++;
    setTimeout(typeWriter4, speed);
  }
}

function typeWriter5() {
  if (j < txt5.length) {
    document.getElementById("pakketAangekomenTekst").innerHTML += txt5.charAt(j);
    j++;
    setTimeout(typeWriter5, speed);
  }
}