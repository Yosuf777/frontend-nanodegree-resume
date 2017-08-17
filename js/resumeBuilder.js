/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*object
replace
append
refresh
*/
/*
 console.log(HTMLheaderName.replace("%data%","Hello"));
$("#header").append(HTMLheaderName.replace("%data%","Yosef Alsuoaqir"));
*/
var bio = {
  name: "Yosef Alsuoaqir",
  role: "Web developer",
  contacts: { /*an object with*/
    mobile: "0556657774",
    email: "yosef.Alsuoaqir@gmail.com",
    github: "https://github.com/Yosuf777",
    twitter: "@AlsougerYoosuf",
    location: "Riyadh",
    blog: "blog"
  },
  welcomeMessage: "Hello world your welcome",
  skills: ["Java script", "CSS", "HTML", "Java", "ASP.NET"],
  /*array of strings*/
  biopic: "https://goo.gl/B2kpSQ",
  /*url*/
  display: function() {
    $("#header").append(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    /*          $("#header").append(HTMLcontactGeneric.replace("%contact%",""));
     */
    $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart.replace("%data%", bio.skills));
for (var i= 0; i< bio.skills.length; i++)
    $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  }
};

bio.display();



$("#mapDiv").append(googleMap);
// This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is'==/an_example/){of_beautifier();}else{var a=b?(c%d):e[f];}