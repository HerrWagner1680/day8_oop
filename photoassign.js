 // Implement an object model that allows you to store strings that represent a Photo. 
 // Your model should include an Album object that can contain many Photo objects 
 // in its photos attribute. Each Album should allow you to add a new photo, 
 // list all photos, and access a specific photo by the order it was added. 
 // Each Photo should tell you the photo’s file name and the location the photo was taken in.

 // Create instances of each object defined to prove that your object model works

//below is nearly a cut and paste duplicate of MONJI's code



// we have two objects, one for an album and one for photo(s)

function Photo(filename, location) {
  this.file_name = filename;
  this.pic_location = location;
}

// Create a bunch of photos using the photo object constructor
var pic1 = new Photo("img1.jpg", "Canada");
var pic2 = new Photo("img2.jpg", "Germany");
var pic3 = new Photo("img3.jpg", "Spain");
var pic4 = new Photo("img4.jpg", "Albania");
var pic5 = new Photo("img5.jpg", "Russia");
var pic6 = new Photo("img6.jpg", "Mexico");


// Use another constructor to build an album object

function Album() {
  // This album should do things, including:
  // - be able to add photos to the album
  // - list photos that have already been added
  // - access photos by the order in which they were added

  // Create a blank array that where we can store the photos
  this.photoList = [];

  // Add a function to the array by passing it into an anonymous
  // function
  this.addPhoto = function(photo) {
    // Add ("Push") photo object into the photoList array
    this.photoList.push(photo);
  }

  // List all photos in the photoList array
  this.listPhotos = function() {
    // Create an empty string that where filenames will be added
    var list_of_pictures = "";

    // Loop through all of the items in the array, and add
    // filenames to "list_of_pictures"
    for(var i = 0; i < this.photoList.length; i++) {

      // Set the photo object to a new/temporary variable. 
      var current_photo = this.photoList[i];
      list_of_pictures = list_of_pictures + " " + current_photo.file_name;
    }
    console.log(list_of_pictures); // show list of pictures in console
  }

  // Display file name and location of a photo based on the pic's index in the array 
  this.photoInfo = function(photo_index) {
    var photo = this.photoList[photo_index];
    return "File Name: " + photo.file_name + "   Location: " + photo.pic_location;
  }
}



// Eventually, we want to be able to create a new album and
// add photos to it:
var myAlbum = new Album();
myAlbum.addPhoto(pic1);
myAlbum.addPhoto(pic2);
myAlbum.addPhoto(pic3);
myAlbum.listPhotos();
myAlbum.photoInfo(1); // photoInfo lines work when enter into console
myAlbum.photoInfo(2); // AFTER program running