// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


// AJAX call for albums
$(function() {
  $.ajax({
    url: "https://stg-resque.hakuapp.com/albums.json",
    method: "GET",
    dataType: 'jsonp'
  })
  // Appending the json data to the HTML styling
  .done(function(data) {
    $.each(data, function(index, value) {
      $('#boutique').append(albumMockUp(value));
    })
  })

  // Styling of Carousel
  .success(function() {
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
  });
  // Selecting the songs from the album in the center location
  getSongs(1);

})

//Favoriting a song
$(document).on( "click", "td.favorite-spacing", function() {
  $(this).children().toggleClass("favorited");
});

// Hover effect for favoriting
$(document).on( "mouseenter", "td.favorite-spacing", function() {
  $(this).children().tooltip();
});


// HTML styling for songs
function songMockUp(data) {
  // Checking to see if there is a song label to append
  var genre = "";
  if ( data.song_label == null ) {
    genre = "";
  }else {
    $.each(data.song_label, function(index, value){
      genre += '<span class="song-label">' + value + '</span>';
    })
  }
  return '<tr>' +
  '<th scope="row" class="song-order-spacing"><div class="song-order">' + data.id + '</div></th>' +
  '<td class="favorite-spacing"><span data-toggle="tooltip" data-placement="top" title="MARK AS FAVORITE" class="glyphicon glyphicon-star" aria-hidden="true"></span></td>' +
  '<td class="song-name">' + data.song_name + genre +
  '</td>' +
  '<td class="song-time">' + data.song_duration + '</td>' +
  '</tr>';
}


// AJAX call for songs
function getSongs(framenumber) {
  $.ajax({
    url: "https://stg-resque.hakuapp.com/songs.json?album_id=" + framenumber,
    method: "GET",
    dataType: 'jsonp'
  })
  // Emptying the table & appending the json data to the HTML styling
  .done(function(data) {
    $('tbody').empty();
    $.each(data, function(index, value){
      $('tbody').append(songMockUp(value));
    })
  });
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
