// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers.

// Make sure to write code afterwards that creates instances of these objects to make sure 
// that what you’ve written works well and you’re able to store the necessary data in each object.


// PERSON object - first name, last name, age
function Person(first_name, last_name, age) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.age = age;
}

// creating multiple Person objects
var p_1 = new Person("Fred", "Jones", "29");
var p_2 = new Person("Jane", "Doe", "35");
var p_3 = new Person("Johnnie", "Favreau", "8");
var p_4 = new Person("Happy", "Flumenbaum", "7");




// Adding new categories under Person
Person.prototype.Subject_Teaching = null;
Person.prototype.Grade_Attending = null;


//TEACHER object - subject teaching, plus person attributes - attribute teacher_yes: true - student_yes: false
function Teacher(subject_teaching) {
	// this.subject_teaching = subject_teaching;
	// this.teacher_yes = true;
	// this.student_yes = false;
	// 	if (teacher_yes = true) {
	// 	console.log(" Teacher of " + subject_teaching);
	// } else
	// console.log(" Student ");
}
// I was not able to incorporate this TEACHER object into the calculations.
// The var teach lines are adding the TEACHER data.

var teach_1 = p_1.Subject_Teaching = ("Math");
var teach_2 = p_2.Subject_Teaching = ("Science");



// STUDENT object - grade attending, plus person attributes - attribute teacher_yes: false - student_yes: true
function Student (grade_attending) {
	// this.grade_attending = grade_attending;
	// this.teacher_yes = false;
	// this.student_yes = true;
	// if (student_yes = true) {
	// 	console.log(" Student in " + grade_attending);
	// } else
	// console.log(" Teacher ");
}
// I was not able to incoporate this STUDENT object int the calculations.
// The var student lines are adding the STUDENT data.

var student_1 = p_3.Grade_Attending = "Third Grade";
var student_2 = p_4.Grade_Attending = "Second Grade";





// CONTAINTER OBJECT --- SCHOOL --- will identify each person as a student or a teacher
// and will list related details

function School () {
 
	this.TeacherList =[];
	this.StudentList = [];
 	this.addPerson = function(personEntry){
 		if (personEntry.Subject_Teaching != null){

 		this.TeacherList.push("Teacher's Name: " + personEntry.first_name + " " + personEntry.last_name 
 			+ " Age: " + personEntry.age + " Teaches: " + personEntry.Subject_Teaching);
 		listofTeachers = this.TeacherList;
 	}
 		else  {
 		this.StudentList.push("Student's Name: " + personEntry.first_name + " " + personEntry.last_name 
 			+ " Age: " + personEntry.age + " Grade Attending: " + personEntry.Grade_Attending);
 		listofStudents = this.StudentList;
 	}
 	};

	this.listTeachers = function() {
 		for(var i = 0; i <listofTeachers.length; i++)	
 		console.log(listofTeachers[i]); 
 	};

 	this.listStudents = function() {
 		for(var i = 0; i <listofStudents.length; i++)
 		console.log(listofStudents[i]);
 	};

};

var mySchool = new School()
mySchool.addPerson(p_1);
mySchool.addPerson(p_2);
mySchool.addPerson(p_3);
mySchool.addPerson(p_4);

mySchool.listTeachers();
mySchool.listStudents();