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
var skills = ["awesomeness", "programming", "teaching", "JS"];
var bio = {
	"name" : "Ben Collins",
	"age" : 33,
	"skills" : skills
	};
var myName = HTMLheaderName.replace("%data%", name);
var myEmail = HTMLemail.replace("%data%", email);
var myRole = HTMLheaderRole.replace("%data%", role);
var myTwitter = HTMLtwitter.replace("%data%", twitter);
var myGithub = HTMLgithub.replace("%data%", github);
var myMobile = HTMLmobile.replace("%data%", mobile);

$("#header").prepend(myRole);
$("#header").prepend(myName);
$("#main").append(bio.skills);
$("#footerContacts").append(myEmail);
$("#footerContacts").append(myTwitter);
$("#footerContacts").append(myGithub);
$("#footerContacts").append(myMobile);