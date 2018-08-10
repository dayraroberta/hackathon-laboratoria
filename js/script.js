$('#home').hide();
$(document).ready(function() {
  $('.splash-screen').delay('2000').fadeOut('slow');
  $('#home').delay('2000').fadeIn('slow');

  $('.carousel').carousel();

  function jsonThen(func) {
    return function (response) {
      response.json().then(func);
    }
  }

  function myMethod(json) {
    json.data.forEach(function (music){console.log(music.title)});
    
    console.log(json.data);
  }

  fetch('https://api.deezer.com/search/track?q=soundtrack').then(jsonThen(myMethod));
});

