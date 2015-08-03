/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span class='roles'>%data%</span>";

var HTMLcontactGeneric = "<li class='contact-item'><a href='#'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></a></li>";
var HTMLmobile = "<li class='contact-item'><a href='#'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='contact-item'><a href='%data%'><svg class='icon email-icon' width='24' height='24'><use xlink:href='#icon-email'></svg><span class='white-text'>Email</span></li>";
var HTMLtwitter = "<li class='contact-item'><a href='%data%' target='_blank'><svg class='icon twitter-icon' width='24' height='24'><use xlink:href='#icon-twitter'></svg><span class='white-text'>Twitter</span></li>";
var HTMLgithub = "<li class='contact-item'><a href='%data%' target='_blank'><svg class='icon github-icon' width='24' height='24'><use xlink:href='#icon-github'></svg><span class='white-text'>Github</span></li>";
var HTMLlinkedin = "<li class='contact-item'><a href='%data%' target='_blank'><svg class='icon linkedin-icon' width='24' height='24'><use xlink:href='#icon-linkedin'></svg><span class='white-text'>LinkedIn</span></a></li>"; // added
var HTMLblog = "<li class='contact-item'><a href='#'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></a></li>";
var HTMLlocation = "<li class='contact-item'><a href='#'><span class='orange-text'>location</span><span class='white-text'>%data%</span></a></li>";

var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry entry'><div class='entry-meta'></div></div>";
var HTMLworkEmployer = "<a href='#' class='item-title'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<div class='description-head'>Responsibilities:</div><p>%data%</p>";

var HTMLprojectStart = "<div class='project-entry entry'><div class='entry-meta'></div></div>";
var HTMLprojectTitle = "<a href='#' class='item-title'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p>%data%</p>";
var HTMLprojectImageStart = "<div class='project-gallery'></div>";
var HTMLprojectImage = "<div class='image-container'><img src='%data%'></div>";

var HTMLschoolStart = "<div class='education-entry entry'><div class='entry-meta'></div></div>";
var HTMLschoolName = "<a href='#' class='item-title'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>";

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#' class='item-title'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<span class='map-watermark'>Gotham City</span><div id='map'></div>";


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});


/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  var xOff = loc.pageX;
  var yOff = loc.pageY;

  logClicks(xOff, yOff);
});

// Toggle for the mobile nav
$(function() {
  var menuToggle = $('#menu-toggle');
      menu       = $('.nav-list');
      menuHeight = menu.height();

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
});

$(function() {
      var links = $('.nav-item');
          menu  = $('.nav-list');

  $(links).on('click', function() {
    var w = $(window).width();
    if( w < 768 ) {
      menu.slideToggle();
    }
  });
});

// Re-show the nav on window resize
function doneResizing(){
  $("#main-nav").sticky('update');
  var w = $(window).width();
  if(w > 768 && menu.is(':hidden')) {
        menu.removeAttr('style');
  }
}

// determine how much to offset the menu when scrolling.
function getMenuOffset(){
  var sticky = $('#main-nav-sticky-wrapper').hasClass('is-sticky');
  var w = $(window).width();
  var menuOffset;
    if ( w > 768 ) {
      menuOffset = 0;
    } else if ( sticky && w < 768 ){
      menuOffset = -57;
    } else if ( !sticky && w < 768 ){
      menuOffset = -377;
    } else {
      menuOffset = 0;
    }
    return menuOffset;
}






//----------------------------------------------------------------------------------------------------------//
//                  .:                                                                                      //
//             S X@@B:                                                                                      //
//    :Sr,     ,@@@@                      ;G9G                                                    r#,       //
// 53@@M        @@@@                      B@@@.                                                   @@@2;     //
//  @@@,  ,     #@@@   r233i      rB@@@r  r@@@.  .                            r233i                @@@@@@.  //
//  X@@@@@@@@.  @@@@ #@@@@@@@Mr .@@@@@@@@. @@@,,@@@;   r#@@H@2          .   @@@@@@@@Mr H@#;,B@2  .S9@@@@@@  //
//  s@@@2;#@@@  @@@# HXS   @@@X @@@r   hH; @@@2.@@#,  @@@@@@@@@#.@@@;  9@@r #X5   @@@X @@@@@@@@ s@@@&2@@@@  //
//  r@@s   #@@2 @@@#  :5#@@@@@. @@@        @@@r G@s  S@@@   B@@h @@@;  @@@:  :SM@@@@@. @@@@r .. @@@    @@@  //
//  :@@9   #@@2 @@@3.@@@;  A@@  #@@r       @@@3 @@@s 2@@M   r@@r #@@.  r@@ ,@@@;  &@@  @@@;     @@@    @@@  //
//  #@@@AS@@@@  @@@i;@@@  s@@@h ;@@@@Xs:   @@@2 .@@@  @@@@5A@@@; @@@;  &@@ r@@@  s@@@5 @M@      B@@#  &@@B  //
//   .&@#@@A:   @@@S i@@@@&.M@r   3@@:     @@@3  @@@:  H@@@@9@@X 2@@@@@@@@h r@@@@A.B@&@@@@#rir   H@@@@@s,   //
//              .,,                        :..    ;          @@@r :H@@r s5             :#@@X.      ..       //
//                                                      G@@   @@i                                           //
//     Your Attention Please                            h@@;,i#:                                            //
//     @@@@@@@@@@@@@@@@@@@@@                              ';;'                                              //
//                                                                                                          //
//----------------------------------------------------------------------------------------------------------//
// Sorry about that I just needed contrast this with the other comments                                     //
//----------------------------------------------------------------------------------------------------------//
// I moved map stuff to gothamMap.js                                                                        //
//                                                                                                          //
// Since I created a map of a fictional place I to jump through some hoops to get everything working        //
// In the process of doing that it became easier to use a second file and simply reference this one         //
// to replicate simliar tasks / goals. Hope it isn't too much bother.                                       //
//                                                                                                          //
// Note: Blackguard heading from my old Quake / Wolfenstein Enemy Territory Config(s)                       //
//----------------------------------------------------------------------------------------------------------//


// /*
// This is the fun part. Here's where we generate the custom Google Map for the website.
// See the documentation below for more details.
// https://developers.google.com/maps/documentation/javascript/reference
// */
// var map;    // declares a global map variable


// /*
// Start here! initializeMap() is called when page is loaded.
// */
// function initializeMap() {

//   var locations;

//   var mapOptions = {
//     disableDefaultUI: true
//   };

//   // This next line makes `map` a new Google Map JavaScript Object and attaches it to
//   // <div id="map">, which is appended as part of an exercise late in the course.
//   map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  // function locationFinder() {

  //   // initializes an empty array
  //   var locations = [];

  //   // adds the single location property from bio to the locations array
  //   locations.push(bio.data.contacts.location);

  //   // iterates through school locations and appends each location to
  //   // the locations array
  //   for (var school in education.data.schools) {
  //     locations.push(education.data.schools[school].location);
  //   }

  //   // iterates through work locations and appends each location to
  //   // the locations array
  //   for (var job in work.data.jobs) {
  //     locations.push(work.data.jobs[job].location);
  //   }

  //   return locations;
  // }



//   /*
//   createMapMarker(placeData) reads Google Places search results to create map pins.
//   placeData is the object returned from search results containing information
//   about a single location.
//   */
  // function createMapMarker(placeData) {

  //   // The next lines save location data from the search result object to local variables
  //   var lat = placeData.geometry.location.k;  // latitude from the place service
  //   var lon = placeData.geometry.location.B;  // longitude from the place service
  //   var name = placeData.formatted_address;   // name of the place from the place service
  //   var bounds = window.mapBounds;            // current boundaries of the map window

  //   // marker is an object with additional data about the pin for a single location
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: placeData.geometry.location,
  //     title: name
  //   });

  //   // infoWindows are the little helper windows that open when you click
  //   // or hover over a pin on a map. They usually contain more information
  //   // about a location.
  //   var infoWindow = new google.maps.InfoWindow({
  //     content: name
  //   });

  //   // hmmmm, I wonder what this is about...
  //   google.maps.event.addListener(marker, 'click', function() {
  //
  //   });

  //   // this is where the pin actually gets added to the map.
  //   // bounds.extend() takes in a map location object
  //   bounds.extend(new google.maps.LatLng(lat, lon));
  //   // fit the map to the new marker
  //   map.fitBounds(bounds);
  //   // center the map
  //   map.setCenter(bounds.getCenter());
  // }

//   /*
//   callback(results, status) makes sure the search returned results for a location.
//   If so, it creates a new map marker for that location.
//   */
//   function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       createMapMarker(results[0])
//     }
//   }

//   /*
//   pinPoster(locations) takes in the array of locations created by locationFinder()
//   and fires off Google place searches for each location
//   */
//   function pinPoster(locations) {

//     // creates a Google place search service object. PlacesService does the work of
//     // actually searching for location data.
//     var service = new google.maps.places.PlacesService(map);

//     // Iterates through the array of locations, creates a search object for each location
//     for (place in locations) {

//       // the search request object
//       var request = {
//         query: locations[place]
//       }

//       // Actually searches the Google Maps API for location data and runs the callback
//       // function with the search results after each search.
//       service.textSearch(request, callback);
//     }
//   }

//   // Sets the boundaries of the map based on pin locations
//   window.mapBounds = new google.maps.LatLngBounds();

//   // locations is an array of location strings returned from locationFinder()
//   locations = locationFinder();

//   // pinPoster(locations) creates pins on the map for each location in
//   // the locations array
//   pinPoster(locations);

// };

// /*
// Uncomment all the code below when you're ready to implement a Google Map!
// */

// // Calls the initializeMap() function when the page loads
// window.addEventListener('load', initializeMap);

// Initialize Custom Map - gothamMap.js
//google.maps.event.addDomListener(window, "load", initialize)

// // Vanilla JS way to listen for resizing of the window
// // and adjust map bounds
// window.addEventListener('resize', function(e) {
//   //Make sure the map bounds get updated on page resize
//   map.fitBounds(mapBounds);
// });
