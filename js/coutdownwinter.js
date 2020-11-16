var DatecountDown = new Date("Dec 20, 2020 23:00:00").getTime();

var x = setInterval(function() {

  var DateNow = new Date().getTime();

  var distance = DatecountDown - DateNow;

  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);
  var mil = (distance % (1000))

  document.getElementById("compteur").innerHTML = d + " jours " + h + " heures "
  + m + " minutes " + s + " secondes" + mil + " millisecondes" + "</h1>"; },1);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("compteur").innerHTML = "C'est l'hiver !!! olala il fait froid.";
  }
