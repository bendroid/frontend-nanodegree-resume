/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Ben Collins");
var name = "Ben Collins";
var role = "Web Developer";
var email = "collins.drums@gmail.com";
var twitter = "@jaemood";
var github = "bendroid";
var mobile = "(555)-555-5555";
var skills = ["awesomeness" + "<br>", "programming" + "<br>", "teaching" + "<br>", "JS"];

var locale = "Rochester, NY";
var pic = "./images/fry.jpg";
var welcome = "Welcome to my site!";
var skillsstart = "Skills at a Glance:";
var work = {};
work.position = "Doing Work";
work.employer = "My Job";
work.years = 0.3;
work.start = "2010";

var education = {};
education["name"] = "School of Hard Knocks";
education["years"] = "2001-2005"
education["city"] = "New York";

var myPic = HTMLbioPic.replace("%data%", pic);
var myName = HTMLheaderName.replace("%data%", name);
var myEmail = HTMLemail.replace("%data%", email);
var myRole = HTMLheaderRole.replace("%data%", role);
var myTwitter = HTMLtwitter.replace("%data%", twitter);
var myGithub = HTMLgithub.replace("%data%", github);
var myMobile = HTMLmobile.replace("%data%", mobile);
var myLocation = HTMLlocation.replace("%data%", locale);
var myWelcome = HTMLwelcomeMsg.replace("%data%", welcome);
var mySkillsStart = HTMLskillsStart.replace("%data%", skillsstart);
var skills = HTMLskills.replace("%data%", skills);
//var mySkills = HTMLskills.replace("%data%", skills);

$("#header").prepend(myRole);
$("#header").prepend(myName);
$("#header").append(myWelcome);
$("#header").append(myPic);
$("#header").append(mySkillsStart);
$("#header").append(skills);
$("#topContacts").append(myEmail);
$("#topContacts").append(myTwitter);
$("#topContacts").append(myGithub);
$("#topContacts").append(myMobile);
$("#topContacts").append(myLocation);
$("#footerContacts").append(myEmail);
$("#footerContacts").append(myTwitter);
$("#footerContacts").append(myGithub);
$("#footerContacts").append(myMobile);
$("#footerContacts").append(myLocation);
$("main").append(work["position"]);
$("main").append(work.start);
$("main").append(education.name);
