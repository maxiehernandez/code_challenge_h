# Jukebox Simulation

You can view this app live with this link: http://jukebox-simulation.herokuapp.com/
<br>

<h5> Libraries used in this project: </h5>
<ul>
  <li>jQuery</li>
    <ul>
      <li>jQuery was used to simplify scripting in the browser. It allows you to use CSS selectors and target HTML elements.</li>
    </ul>
  <li>Bootstrap</li>
    <ul>
      <li>Bootstrap was used to quickly create HTML styling and simplify placement of the different components. This library also allows for consistency, cross browser compatibility and customization.</li>
    </ul>
  <li>Boutique Carousel</li>
    <ul>
      <li>The Boutique Carousel was used for it's ease of implementation and usability. The carousel allows a smooth transition, customization and the ability to differentiate between the currently selected album, which allowed me to connect the albums songs to the album. </li>
    </ul>
</ul>


<br><br>


<h2> OVERVIEW: </h2>
<p>
This application utilizes JavaScrip, HTML and SCSS. It runs off an API I built that you can view here: https://github.com/maxiehernandez/jukebox_api  
</p>

<p>
The API provides the albums, album titles and artist that are all imported into the carousel. The main frame of the carousel is connected to the song table below it, and utilizes the album_id to connect the songs to the specified album. All of this is done with an AJAX call within the JavaScript file. No database was needed as all the backend, such as saving the songs and albums to the database, is handled by the API.
</p>

<p>
This application utilizes the Rails framework and needs one view(HTML), controller, stylesheet(SCSS), JavaScript file and the above libraries mentioned. 
</p>

<br><br>


<h2>Jukebox Simulation in Action</h2>
<li>The purpose of the design is meant to simulate a digital jukebox. On landing, an album is auto-selected with the song list and it’s additional details displayed below. Additional details included:</li>
<ul>
  <li>Track number</li>
  <li>Song length</li>
  <li>Mark as favorite</li>
  <li>Song Name</li>
  <li>Categorization</li>
    <ul>
      <li>Explicit</li>
      <li>Upbeat</li>
      <li>Slow</li>
    </ul>
</ul>
<li>Users are able to scroll through the carousel both in the left and right directions.</li>
<li>When the user scrolls, the next album in the carousel selects the corresponding song list and additional details are displayed below </li>
  <ul>
    <li>For this interaction the currently selected album’s song list collapse closes, the albums carousel, and then the newly selected album’s song list expands open. </li>
  </ul>

<br><br>
