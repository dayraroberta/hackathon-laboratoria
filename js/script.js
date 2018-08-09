$(document).ready(function() {
  $('.splash-screen').delay('2000').fadeOut('slow');
  $('#home').hide();
  $('#home').delay('2000').fadeIn('slow');


  function jsonThen(func) {
    return function (response) {
      response.json().then(func);
    }
  }

  function myMethod(json) {
    $('.button-search').on('click', function(){
      json.data.forEach(function (music) {
        if ($('.search-bar').val() !== ''){
          console.log('teste');
        }
      // 
      });
    
    });
  }
  fetch('https://api.deezer.com/search/track?q=soundtrack').then(jsonThen(myMethod));
});

