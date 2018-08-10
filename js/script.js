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
      $('#content').empty();
      $('.search-bar').val('');

      json.data.forEach(music => {
        if (music.title.indexOf(input) !== -1 || music.album.title.indexOf(input) !== -1 || input === music.title) {
          console.log(music.title);
          $('#content').append(`
            <h3>${music.title}</h3>
            <h5>${music.artist.name}</h5>
            <img src=${music.album.cover_medium}>
            <audio controls>
              <source src=${music.preview} type="audio/mpeg">
            </audio>
            <p>Ouça no <a href=${music.link}>Deezer</a></p>
          `)
        }

      });
    
    });
  }
  fetch('https://api.deezer.com/search/track?q=soundtrack&render=json').then(jsonThen(myMethod));
});

