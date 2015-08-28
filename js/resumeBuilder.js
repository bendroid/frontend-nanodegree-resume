/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Ben Collins");
/*
var name = "Ben Collins";
var role = "Web Developer";
var email = "collins.drums@gmail.com";
var twitter = "@jaemood";
var github = "bendroid";
var mobile = "(555)-555-5555";
var skills = ["awesomeness", "programming", "teaching", "JS"];

var locale = "Rochester, NY";
var pic = "./images/fry.jpg";
var welcome = "Welcome to my site!";
*/
var skillsstart = "Skills at a Glance:";

/*
var bio = {
	"name" : "Ben Collins",
	"city" : "Rochester,NY",
	"skills" : skills
};
*/

var bio = {
	"name" : "Ben Collins",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "(555)-555-5555",
		"email": "email@myemail.com",
		"github": "bendroid",
		"twitter": "@jaemood",
		"location": "Rochester, NY"
	},
	"welcomeMessage": "Welcome to my site!",
	"skills": ["awesomeness", "programming", "teaching", "JS"],
	"bioPic": "./images/fry.jpg"
};

var work = {
	"workPosition": "Doing Work",
	"workEmployer": "My Job",
	"workYears": 0.3,
	"work.start": "2010"
};



var education = {
  "schools": [
	{
		"name": "School of Hard Knocks",
		"location": "New York",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": 2001,
		"url": "http://example.com"
	},
	{
		"name": "Another School",
		"location": "California",
		"degree": "BA",
		"majors": ["CS"],
		"dates": 2004,
		"url": "http://example.com"
	}
  ],
  "onlineCourses": [
    {
	    "title": "JavaScript Syntax",
	    "school": "Udacity",
	    "dates": 2014,
	    "url": "http://example.com"
    }
  ]
}


education["name"] = "School of Hard Knocks";
education["years"] = "2001-2005"
education["city"] = "New York";

var myPic = HTMLbioPic.replace("%data%", bio.bioPic);
var myName = HTMLheaderName.replace("%data%", bio.name);
var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
var myRole = HTMLheaderRole.replace("%data%", bio.role);
var myTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var myWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var mySkillsStart = HTMLskillsStart.replace("%data%", skillsstart);
var myWorkStart = HTMLworkStart.replace("%data%", work.start);

/*
HTMLworkEmployer
HTMLworkTitle
HTMLworkDates
HTMLworkLocation
HTMLworkDescription
*/
var mySkills = HTMLskills.replace("%data%", bio.skills[0] + "<br>" + bio.skills[1]);
//var mySkills = HTMLskills.replace("%data%", skills);

$("#header").prepend(myRole);
$("#header").prepend(myName);
$("#header").append(myWelcome);
$("#header").append(myPic);
$("#header").append(mySkillsStart);
$("#header").append(mySkills);
$("#topContacts").append(myEmail);
$("#topContacts").append(myTwitter);
$("#topContacts").append(myGithub);
$("#topContacts").append(myMobile);
$("#topContacts").append(myLocation);
$("#workExperience").append(myWorkStart);
$("#workExperience").append(work.workPosition);
$("#footerContacts").append(myEmail);
$("#footerContacts").append(myTwitter);
$("#footerContacts").append(myGithub);
$("#footerContacts").append(myMobile);
$("#footerContacts").append(myLocation);
$("main").append(work["position"]);
$("main").append(work.start);
$("main").append(education.name);
