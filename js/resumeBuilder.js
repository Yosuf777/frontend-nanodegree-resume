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

var work = {

  jobs: [{
    employer: "google",
    title: "Web developer",
    location: "Riyadh, SA",
    dates: "20/10/2017 - Present",
    description: "do a web developer"
  }, {
    employer: "google",
    title: "Web developer",
    location: "Riyadh, SA",
    dates: "20/10/2017 - Present",
    description: "do a web developer"
  }],

  display: function() {


for (var i= 0; i< work.jobs.length; i++)  {
  $("#workExperience").append(HTMLworkStart.replace("%data%", work.jobs));

    $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
    $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
    $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
    $("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
    $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
}


  }

};
work.display();

var projects= {

  projects: [{ /*array of objects with*/
    title: "Strava",
    dates: "10/10/2017",
    /*string (works with a hyphen between them)*/
    description: "sport app",
    images: ["https://s5.mzstatic.com/eu/r30/Purple128/v4/1d/00/ef/1d00efcb-cb7e-64bf-c0ab-fc91ccbbbbcb/icon190x190.jpeg",

"https://s5.mzstatic.com/eu/r30/Purple128/v4/1d/00/ef/1d00efcb-cb7e-64bf-c0ab-fc91ccbbbbcb/icon190x190.jpeg"]
  }],
  display: function() {

    $("#projects").append(HTMLprojectStart.replace("%data%", projects));
for (var i= 0; i<projects.projects.length; i++){
    $("#projects").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
    $("#projects").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
    $("#projects").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
    for (var j= 0; j< projects.projects[i].images.length; j++)
    $("#projects").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));

  }
}
};
projects.display();

var education = {

  schools: [{
    name: "King Saud Uneversity",
    location: "Riyadh",
    degree: "Bacholer",
    majors: ["IS", "MIS", "CS"],
    /*array of Sring*/
    dates: "20/1/2017",
    /*string (works with a hyphen between them)*/
    url: "www.schools.com",
    /*(optional)*/
  }, {
    name: "King Saud Uneversity",
    location: "Riyadh",
    degree: "Bacholer",
    majors: ["IS", "MIS", "CS"],
    /*array of Sring*/
    dates: "20/1/2017",
    /*string (works with a hyphen between them)*/
    url: "www.schools.com",
    /*(optional)*/
  }],
  onlineCourses: [{ /*array of objects with*/
    title: "Cloud Computing",
    school: "Dell",
    dates: "20/1/2017",
    /*string (works with a hyphen between them)*/
    url: "www.onlineCourses.com"
  }, { /*array of objects with*/
    title: "Cloud Computing",
    school: "Dell",
    dates: "20/1/2017",
    /*string (works with a hyphen between them)*/
    url: "www.onlineCourses.com"
  }],

  display: function() {

    $("#education").append(HTMLschoolStart.replace("%data%", education));
for (var i= 0; i<education.schools.length; i++){
    $("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
    $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
    $("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
    $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    for (var j= 0; j<education.schools[i].majors.length; j++){
    $("#education").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
}}
for (var i= 0; i<education.onlineCourses.length; i++){

    $("#education").append(HTMLonlineClasses.replace("%data%", education.onlineCourses));
    $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
    $("#education").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
    $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
    $("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
}


  }
};
education.display();


$("#mapDiv").append(googleMap);
