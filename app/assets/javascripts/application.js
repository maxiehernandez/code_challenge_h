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


// AJAX call with HTML styling for albums
function mockUp(data) {
  return '<li>' +
      '<div class="album-pic">' +
        '<img src="' + data.cover_photo_url + '">' +
      '</div>' +
      '<div id="album-name"> ' + data.name + '</div>' +
      '<div id="artist-name"> ' + data.artist_name + '</div>' +
    '</li>';
}

$(function() {
  $.ajax({
    url: "https://stg-resque.hakuapp.com/albums.json",
    method: "GET",
    dataType: 'jsonp'
  })

  .done(function(data) {
    $.each(data, function(index, value) {
      $('#boutique').append(mockUp(value));
    })
  })
  .success(function() {
    $('#boutique').boutique({
  		container_width: 800,
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
})
