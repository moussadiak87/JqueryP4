$(function(){
$('#submit').click(function(){
  //On stocke la regex pour faire une note 10 ou 10;75 ...
  var noteRegex = new RegExp (/^([0-9]{1,2})([\.,]{1}[0-9]{1,2}){0,1}$/);
  //On stocke dans des variables la valeur récupérée des input. Grâce à number, on met les strings en nombres.
  var firstNote = $('#firstNote').val();
  var secondNote = $('#secondNote').val();
  var thirdNote = $('#thirdNote').val();
  var fourthNote = $('#fourthNote').val();
  var fifthNote = $('#fifthNote').val();

  if(firstNote.match(noteRegex) && secondNote.match(noteRegex) && thirdNote.match(noteRegex) && fourthNote.match(noteRegex) && fifthNote.match(noteRegex)){
    //On fait la moyenne par rapport aux 5 notes.
    var average = (parseFloat(firstNote) + parseFloat(secondNote) + parseFloat(thirdNote) + parseFloat(fourthNote) + parseFloat(fifthNote)) / 5;
    if(average >= 0 && average < 10){
      alert('Moyenne : ' + average + '\nAppréciations : \nEn dessous de la moyenne.');
    }else if (average >= 10 && average < 13){
      alert('Moyenne : ' + average + '\nAppréciations : \nMoyen.');
    }else if (average >= 13 && average < 16){
      alert('Moyenne : ' + average + '\nAppréciations : \nBien.');
    }else if (average >= 16 && average < 20){
      alert('Moyenne : ' + average + '\nAppréciations : \nTrès bien.');
    }else{
      alert('Excellent !');
    }
  }else{
    alert('Veuillez entrer des notes valides svp.');
  }
});
});
