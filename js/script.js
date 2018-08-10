$('#home').hide();
$(document).ready(function() {
  $('.splash-screen').delay('2000').fadeOut('slow');
  $('#home').delay('2000').fadeIn('slow');

  $('.carousel').carousel();
  $('#content').hide();
 

  function jsonThen(func) {
    return function (response) {
      response.json().then(func);
    }
  }

  function myMethod(json) {
    document.getElementsByClassName('button-search')[0].addEventListener('click', function() { 
      var input = $('.search-bar').val();

      $('.carousel').hide();
      $('.message').hide();
      $('#content').empty().show();
      $('.search-bar').val('');

      json.data.forEach(music => {
        if (music.title.indexOf(input) !== -1 || music.album.title.indexOf(input) !== -1 || input === music.title) {
          console.log();
          $('#content').append(`
            <h3 class="text-white">${music.title}</h3>
            <h5 class="text-white">${music.artist.name}</h5>
            <img src=${music.album.cover_medium}>
            <audio controls>
              <source src=${music.preview} type="audio/mpeg">
            </audio>
            <p class="text-white">Ouça no <a href=${music.link}>Deezer</a></p>
          `)
        }

      });
    
    });
  }
  fetch('https://api.deezer.com/search/track?q=soundtrack&render=json').then(jsonThen(myMethod));
});

