// Create an object to represent a record player called
// Jukebox. Create another object to represent a 
// Record. The Jukebox should be able to tell you 
// what Record is currently playing, and allow you to 
// switch the currently playing record. The currently 
// playing Record returned should be an object that
// allows you to query for the title and artist of that
// record as well as the title and artist combined
// together into one string




// we want to make a jukebox that plays records
// we know we need a jukebox object and multiple record objects

// constructor function for records, collecting album title and artist arguments/data
function Record(title, artist) {
  this.title = title;
  this.artist = artist;
}
// all the above is doing is just creating a blueprint of what
// a record object should look like. it is NOT creating one.

// now let's create a few records.
var record_one = new Record("Christmas Caravan", "Squirrel Nut Zippers");
var record_two = new Record("Thanks For The Ether", "Rasputina");
var record_three = new Record("Nosferatu", "Alloy Orchestra");

// THE ABOVE IS STRICTLY RECORD DATA




// Now that we have records, we need to create a jukebox object
// to play them
function Jukebox() {

  this.playRecord = function(record) {
    // record has following properties:
    // >> Record {title: "xxxxxx", artist: "xxxxx"}
    // I can now access the record passed into this anonymous
    // function:
    // 1) store these properties (artist/album_name) into currentlyPlaying string
    //      so I can access that info elsewhere
    // 2) let the user know that I'm playing their record
    currentRecord = record; // saves record info in original object format
    currentlyPlaying = "NOW PLAYING: " + record.title + "  PERFORMED BY: " + record.artist;
    console.log(currentlyPlaying);
  }

  this.clearRecord = function() {
    console.log("CLEARING: " + currentRecord.title); // tells the user what record is being cleared
    console.log("NO RECORD CURRENTLY PLAYING.")
    currentRecord = "";  // clears the currentRecord variable
    currentlyPlaying = "";  // clears the currentlyPlaying variable
  }
}

var my_jukebox = new Jukebox();
my_jukebox.playRecord(record_one); //immediately starts record_one when program loads