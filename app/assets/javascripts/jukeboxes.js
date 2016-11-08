// AJAX call for albums
$(function() {
  // Appending the json data to the HTML styling
  $.ajax({
    url: "https://gentle-wave-81371.herokuapp.com/albums",
    method: "GET",
    dataType: 'json'
  })
  .done(function(data) {
    $.each(data, function(index, value) {
      $('#boutique').append(albumMockUp(value));
    })
  })
  .success(function() {
    // Styling of Carousel
    $('#boutique').boutique({
      container_width: 900,
      front_img_width: 200,
      front_img_height: 200,
      frames: 5,
      behind_size: 1,
      back_size: 1,
      behind_opacity: 1,
      back_opacity: 1,
      front_topmargin: 70,
      behind_topmargin: 35,
      back_topmargin: 0
    });
  })
  .error(function(e){
  });
  // Selecting the songs from the album in the center location
  getSongs(1);

})

// Collapse song table on click
$(document).on( "click", ".right-style, .left-style, #boutique li", function() {
  $('#table-wrapper').height(1);
});

//Favoriting a song
$(document).on( "click", "td.favorite-spacing", function() {
  var star = $(this).find(".glyphicon-star");
  star.toggleClass("favorited");
  var is_favorited = star.hasClass("favorited"),
      dataId = $(this).closest(".song-tr").data().songId;
  $.ajax({
    url: "https://gentle-wave-81371.herokuapp.com/favorite",
    method: "GET",
    dataType: 'json',
    data: { favorite: is_favorited, id: dataId }
  })
  .done(function(data) {
    star.attr("data-original-title", data.tooltip);
  });
});

// Hover effect for favoriting
$(document).on( "mouseenter", "td.favorite-spacing", function() {
  $(this).children().tooltip();
});


// HTML styling for songs
function songMockUp(data) {
  // Checking to see if there is a song label to append
  var genre = "";
  if ( data.song_label == [] ) {
    genre = "";
  }else {
    $.each(data.song_label, function(index, value){
      genre += '<span class="song-label">' + value + '</span>';
    })
  }
  return '<tr class="song-tr" data-song-id="'+ data.id  +'">' +
  '<th scope="row" class="song-order-spacing"><div class="song-order">' + data.song_order + '</div></th>' +
  '<td class="favorite-spacing"><span data-toggle="tooltip" data-placement="top" title="' + (data.favorite ? 'Unfavorite' : 'Mark as favorite') + '" class="glyphicon glyphicon-star'+ (data.favorite ? ' favorited' : '') +'" aria-hidden="true"></span></td>' +
  '<td class="song-name">' + data.song_name + genre +
  '</td>' +
  '<td class="song-time">' + data.song_duration + '</td>' +
  '</tr>';
}


// AJAX call for songs
function getSongs(framenumber) {
  $.ajax({
    url: "https://gentle-wave-81371.herokuapp.com/songs?album_id=" + framenumber,
    method: "GET",
    dataType: 'json'
  })
  .done(function(data) {
    // Emptying the table & appending the json data to the HTML styling
      $('tbody').empty();
      data.sort(function (a, b) {
        return a.song_order - b.song_order;
      });
      $.each(data, function(index, value){
        $('tbody').append(songMockUp(value));
      })
  })
  .complete(function(){
    // Making the table collapseable
    $('#table-wrapper').height("205px")
  })
}

// Connecting songs to their album
function move_callback(anchor, instance, framenumber){
	getSongs(framenumber);
}


// HTML styling for albums
function albumMockUp(data) {
  return '<li>' +
  '<div class="album-pic">' +
  '<img src="' + data.cover_photo_url + '">' +
  '</div>' +
  '<div id="album-name"> ' + data.name + '</div>' +
  '<div id="artist-name"> ' + data.artist_name + '</div>' +
  '</li>';
}
