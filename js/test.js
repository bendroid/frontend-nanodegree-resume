var bio = {
	"name" : "Ben Collins",
	"role" : "Web Developer"
	"contacts": {
		"mobile": "(555)-555-5555",
		"email": "email@myemail.com";
		"github": "bendroid",
		"twitter": "@jaemood",
		"location": "Rochester, NY"
	},
	"welcomeMessage": "Welcome to my site!",
	"skills": ["awesomeness", "programming", "teaching", "JS"],
	"bioPic": "./images/fry.jpg"
};
//

//
var work = {};
work.position = "Doing Work";
work.employer = "My Job";
work.years = 0.3;

var education = {};
education["name"] = "School of Hard Knocks";
education["years"] = "2001-2005"
education["city"] = "New York";

$("main").append(work["position"]);
$("main").append(education.name);
//

//
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	("#skills").append(formattedSkill);
}
//
