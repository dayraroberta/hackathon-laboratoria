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
      var input = $('.search-bar').val();
      json.data.forEach(music => {
        if (music.title.indexOf(input) > 0) {
          console.log(music.title);
        }

      });
    
    });
  }
  fetch('https://api.deezer.com/search/track?q=soundtrack&render=json').then(jsonThen(myMethod));
});

