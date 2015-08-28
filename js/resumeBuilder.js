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
	"skillsstart": "Skills at a Glance:",
	"skills": ["awesomeness", "programming", "teaching", "JS"],
	"bioPic": "./images/fry.jpg"
};

/*
var work = {
	"position": "Doing Work",
	"workEmployer": "My Job",
	"workYears": 0.3,
	"workstart": "2010"
};
*/

var work = {
	"employer": ["Company 1", "Company 2"],
	"position2": ["My Job 1", "My Job 2"],
	"years": 0.3,
	"start": "2010"
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



var myWorkStart = HTMLworkStart.replace("%data%", work.start);
var myWorkTitle = HTMLworkTitle.replace("%data%", work.position);



$("#header").prepend(myRole);
$("#header").prepend(myName);
$("#header").append(myWelcome);
$("#header").append(myPic);
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

if(work.employer.length > 0) {
  $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer[0]);
    $(".work-entry").append(formattedEmployer);
    var formattedPosition = HTMLworkTitle.replace("%data%",work.position2[0]);
    $(".work-entry").append(formattedPosition);
};

if(work.position2.length > 0) {
  //$("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer[1]);
    $(".work-entry").append(formattedEmployer);
    var formattedPosition = HTMLworkTitle.replace("%data%",work.position2[1]);
    $(".work-entry").append(formattedPosition);
};

$("#topContacts").append(myEmail);
$("#topContacts").append(myTwitter);
$("#topContacts").append(myGithub);
$("#topContacts").append(myMobile);
$("#topContacts").append(myLocation);
$("#workExperience").append(myWorkStart);
$("#workExperience").append(myWorkTitle);
$("#footerContacts").append(myEmail);
$("#footerContacts").append(myTwitter);
$("#footerContacts").append(myGithub);
$("#footerContacts").append(myMobile);
$("#footerContacts").append(myLocation);
$("#main").append(work["position"]);
$("#main").append(work.start);
$("#main").append(education.name);

if(document.getElementsByClassName('flex-item').length === 0) {
          // document.style.backgroundColor = "black";
    			document.getElementById('topContacts').style.backgroundColor = "black";
        }
        if(document.getElementsByTagName('h1').length === 0) {
          // document.style.display = 'none';
    					document.getElementById('header').style.backgroundColor = "black";
        }
        if(document.getElementsByClassName('work-entry').length === 0) {
          // document.getElementById('workExperience').style.display = 'none';
    					document.getElementById('workExperience').style.backgroundColor = "black";
        }
        if(document.getElementsByClassName('project-entry').length === 0) {
          // document.getElementById('projects').style.display = 'none';
    					document.getElementById('projects').style.backgroundColor = "black";
        }
        if(document.getElementsByClassName('education-entry').length === 0) {
          // document.getElementById('education').style.display = 'none';
    					document.getElementById('education').style.backgroundColor = "black";
        }
        if(document.getElementsByClassName('flex-item').length === 0) {
          // document.getElementById('lets-connect').style.display = 'none';
    					document.getElementById('lets-connect').style.backgroundColor = "black";
        }
        if(document.getElementById('map') === null) {
          // document.getElementById('mapDiv').style.display = 'none';
    					document.getElementById('mapDiv').style.backgroundColor = "black";
        }
