$(document).ready(function() {
  var victory = 0;
  var defeat = 0;
  var even = 0;
  // Je lance ma fonction quand je click sur le bouton
  $('#shiFuMi').click(function(){
    // Je stock dans une variable un tableau(Array)
    var choices = ['Feuille','Ciseaux','Pierre'];
    //Je génère le choix de l'ordinateur
    var computerChoice = Math.floor(Math.random()*3);
    // Choix de l'utilisateur
    var userChoice = $('#userChoice option:selected').val();
    //Si le choix de l'ordinateur et le même choix que celui de l'utilisateur alors :
    if(computerChoice == userChoice){
    //une boite d'alerte ce gènere (Egalité).
      alert('égalité');
      even++;
    // Autrement si l'utilisateur gagner contre l'ordinateur exemple(Pierre > Ciseaux) alors :
    }else if ((choices[userChoice] == 'Pierre' && choices[computerChoice] == 'Ciseaux') || (choices[userChoice] == 'Ciseaux' && choices[computerChoice] == 'Feuille') || (choices[userChoice] == 'Feuille' && choices[computerChoice] == 'Pierre')) {
    // L'utilisateur gagne.
      alert('Youpi, tu as gagné');
      victory++;
    //Sinon :
    }else{
    // L'ordinateur Gagne
      alert('Youpi, tu as perdu');
      defeat++;
    }
    var victoryPercentage = (victory/(victory + defeat + even))*100;
    $('#result').html('<p class="resultVictory">Nombre de victoire : ' + victory + '(' + victoryPercentage +  '%)</p><p class="resultDefeat">Nombre de défaite : ' + defeat + '</p>');
  });
});
