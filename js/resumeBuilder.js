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
var bio={
        name : "Yosef Alsuoaqir",
        role :"Web developer",
        contacts : { /*an object with*/
              mobile: "0556657774",
              email:"yosef.Alsuoaqir@gmail.com",
              github: "https://github.com/Yosuf777",
              twitter: "@AlsougerYoosuf",
              location: "Riyadh",
              blog: "blog"
            },
        welcomeMessage: "Hello world your welcome",
        skills: ["Java script","CSS","HTML","Java","ASP.NET"],/*array of strings*/
        biopic: "https://goo.gl/B2kpSQ",/*url*/
        display: function(){
          $("#header").append(HTMLheaderName.replace("%data%",bio.name));
          $("#header").append(HTMLheaderRole.replace("%data%",bio.role));
/*          $("#header").append(HTMLcontactGeneric.replace("%contact%",""));
*/          $("#header").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
          $("#header").append(HTMLemail.replace("%data%",bio.contacts.email));
          $("#header").append(HTMLgithub.replace("%data%",bio.contacts.github));
          $("#header").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
          $("#header").append(HTMLlocation.replace("%data%",bio.contacts.location));
          $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
          $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
          $("#header").append(HTMLskillsStart.replace("%data%",bio.skills)); //i thing its right
          $("#header").append(HTMLskills.replace("%data%",bio.skills[0]));
          $("#header").append(HTMLskills.replace("%data%",bio.skills[1]));
          $("#header").append(HTMLskills.replace("%data%",bio.skills[2]));
          $("#header").append(HTMLskills.replace("%data%",bio.skills[3]));
          $("#header").append(HTMLskills.replace("%data%",bio.skills[4]));
};
        }

bio.display();

var work ={

      jobs: [{
            employer: "google",
           title: "Web developer",
           location: "Riyadh, SA",
           dates: "20/10/2017 - Present",
           description: "do a web developer"},{
                 employer: "google",
                title: "Web developer",
                location: "Riyadh, SA",
                dates: "20/10/2017 - Present",
                description: "do a web developer"}],

      display: function(){

          $("#workExperience").append(HTMLworkStart.replace("%data%",work.jobs[0]));
          $("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[0].employer));
        $("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[0].title));
          $("#workExperience").append(HTMLworkDates.replace("%data%",work.jobs[0].dates));
          $("#workExperience").append(HTMLworkLocation.replace("%data%",work.jobs[0].location));
          $("#workExperience").append(HTMLworkDescription.replace("%data%",work.jobs[0].description));


                    $("#workExperience").append(HTMLworkStart.replace("%data%",work.jobs[1]));
                    $("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[1].employer));
                  $("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobs[1].title));
                    $("#workExperience").append(HTMLworkDates.replace("%data%",work.jobs[1].dates));
                    $("#workExperience").append(HTMLworkLocation.replace("%data%",work.jobs[1].location));
                    $("#workExperience").append(HTMLworkDescription.replace("%data%",work.jobs[1].description));

};

      }
work.display();

var project ={

      projects: [{/*array of objects with*/
            title: "Strava",
            dates: "10/10/2017",/*string (works with a hyphen between them)*/
            description: "sport app",
            images: ["https://s5.mzstatic.com/eu/r30/Purple128/v4/1d/00/ef/1d00efcb-cb7e-64bf-c0ab-fc91ccbbbbcb/icon190x190.jpeg","https://s5.mzstatic.com/eu/r30/Purple128/v4/1d/00/ef/1d00efcb-cb7e-64bf-c0ab-fc91ccbbbbcb/icon190x190.jpeg"]
          }],
      display: function(){

        $("#projects").append(HTMLprojectStart.replace("%data%",project));
       $("#projects").append(HTMLprojectTitle.replace("%data%",project.projects[0].title));
       $("#projects").append(HTMLprojectDates.replace("%data%",project.projects[0].dates));
       $("#projects").append(HTMLprojectDescription.replace("%data%",project.projects[0].description));
       $("#projects").append(HTMLprojectImage.replace("%data%",project.projects[0].images[0]));
       $("#projects").append(HTMLprojectImage.replace("%data%",project.projects[0].images[1]));
      };

}
project.display();

var education= {

      schools: [{
        name : "King Saud Uneversity",
           location:"Riyadh",
           degree: "Bacholer",
           majors: ["IS","MIS","CS"],/*array of Sring*/
           dates: "20/1/2017", /*string (works with a hyphen between them)*/
           url:"www.schools.com", /*(optional)*/
         },{
           name : "King Saud Uneversity",
              location:"Riyadh",
              degree: "Bacholer",
              majors: ["IS","MIS","CS"],/*array of Sring*/
              dates: "20/1/2017", /*string (works with a hyphen between them)*/
              url:"www.schools.com", /*(optional)*/
            }],
      onlineCourses: [{/*array of objects with*/
           title: "Cloud Computing",
           school: "Dell",
           dates: "20/1/2017",/*string (works with a hyphen between them)*/
           url: "www.onlineCourses.com"},{/*array of objects with*/
                title: "Cloud Computing",
                school: "Dell",
                dates: "20/1/2017",/*string (works with a hyphen between them)*/
                url: "www.onlineCourses.com"}],

      display: function(){

        $("#education").append(HTMLschoolStart.replace("%data%",education));
        $("#education").append(HTMLschoolName.replace("%data%",education.schools[0].name));
        $("#education").append(HTMLschoolDegree.replace("%data%",education.schools[0].degree));
        $("#education").append(HTMLschoolDates.replace("%data%",education.schools[0].dates));
        $("#education").append(HTMLschoolLocation.replace("%data%",education.schools[0].location));
        $("#education").append(HTMLschoolMajor.replace("%data%",education.schools[0].majors[0]));
        $("#education").append(HTMLschoolMajor.replace("%data%",education.schools[0].majors[1]));
        $("#education").append(HTMLschoolMajor.replace("%data%",education.schools[0].majors[2]));


                $("#education").append(HTMLschoolName.replace("%data%",education.schools[1].name));
                $("#education").append(HTMLschoolDegree.replace("%data%",education.schools[1].degree));
                $("#education").append(HTMLschoolDates.replace("%data%",education.schools[1].dates));
                $("#education").append(HTMLschoolLocation.replace("%data%",education.schools[1].location));
                $("#education").append(HTMLschoolMajor.replace("%data%",education.schools[1].majors[0]));
                $("#education").append(HTMLschoolMajor.replace("%data%",education.schools[1].majors[1]));
                $("#education").append(HTMLschoolMajor.replace("%data%",education.schools[1].majors[2]));

        $("#education").append(HTMLonlineClasses.replace("%data%",education.onlineCourses));
        $("#education").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[0].title));
        $("#education").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[0].school));
        $("#education").append(HTMLonlineDates.replace("%data%",education.onlineCourses[0].dates));
        $("#education").append(HTMLonlineURL.replace("%data%",education.onlineCourses[0].url));


                $("#education").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[1].title));
                $("#education").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[1].school));
                $("#education").append(HTMLonlineDates.replace("%data%",education.onlineCourses[1].dates));
                $("#education").append(HTMLonlineURL.replace("%data%",education.onlineCourses[1].url));

      };
}
education.display();

$("#mapDiv").append(googleMap);
$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
          $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
          $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
          $("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
          $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
