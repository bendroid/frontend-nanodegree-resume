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
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
var formattedGithub = HTMLgithub.replace("%data%", github);
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedMobile);