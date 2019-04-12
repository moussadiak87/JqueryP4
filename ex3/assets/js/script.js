$(function(){
  $('#submit').click(function(){
    var regexName = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
    var regexphone = /^0[1-9]{1}[0-9]{8}$/;
    var regexMail = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,}$/;

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var mail = $('#mail').val();
    var phoneNumber = $('#phoneNumber').val();

    if (lastName.match(regexName) && firstName.match(regexName) && mail.match(regexMail) && phoneNumber.match(regexphone)){
      $('#displayInfo').html('Firstname : ' + firstName + '<br>Lastname : ' + lastName + '<br>Mail : ' + mail + '<br>Phone number : ' + phoneNumber);
    } else{
      alert('Veuillez entrer des données valides');
    }
  });
});
