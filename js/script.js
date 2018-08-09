$(document).ready(function() {
  $('.splash-screen').delay('2000').fadeOut('slow');


});


function jsonThen(func) {
  return function (response) {
    response.json().then(func);
  }
}

function myMethod(json) {
  //coloque aqui dentro o seu código
  console.log(json);
}


fetch('https://api.deezer.com/search/track?q=soundtrack').then(jsonThen(myMethod));
