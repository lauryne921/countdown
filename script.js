// Date cible
var countDownDate = new Date("2023-02-27T00:00:00Z").getTime();

// Mise à jour de la durée toutes les secondes
var x = setInterval(function() {

  // Date actuelle
  var now = new Date().getTime();
  
  // Calcul de la différence entre les dates
  var distance = countDownDate - now;
  
  // Calcul des jours, heures, minutes et secondes restants
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Affichage des résultats dans les éléments HTML correspondants
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // Si le compte à rebours est terminé, afficher un message
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("h1").innerHTML = "WE'RE LUNCHING NOW !";
  }
}, 1000);
