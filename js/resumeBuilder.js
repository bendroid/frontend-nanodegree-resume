var bio = {
	"name" : "Ben Collins",
	"role" : "Web Developer",
	"welcomeMessage": "Welcome to my site!",
	"skillsstart": "Skills at a Glance:",
	"skills": ["awesomeness", "programming", "teaching", "JS"],
	"bioPic": "./images/fry.jpg"
};

var contacts = {
	"mobile": "(555)-555-5555",
	"email": "email@myemail.com",
	"github": "bendroid",
	"twitter": "@jaemood",
	"location": "Rochester, NY"
};

var work = {
	"employer": ["Company 1", "Company 2"],
	"position": ["My Job 1", "My Job 2"],
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

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedEmail = HTMLemail.replace("%data%", contacts.email);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcome);
$("#header").append(formattedPic);
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
    var formattedPosition = HTMLworkTitle.replace("%data%",work.position[0]);
    $(".work-entry").append(formattedPosition);
};

if(work.position.length > 0) {
  //$("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer[1]);
    $(".work-entry").append(formattedEmployer);
    var formattedPosition = HTMLworkTitle.replace("%data%",work.position[1]);
    $(".work-entry").append(formattedPosition);
};

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedLocation);

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
