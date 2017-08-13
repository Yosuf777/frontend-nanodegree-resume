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
        skills: ["Java script","CSS","HTML"],/*array of strings*/
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

        }
}
bio.display();

var work ={

      jobs: [{/*array of objects with*/
           employer: "google",
           title: "Web developer",
           location: "Riyadh",
           dates: "20/10/2017",/*string (Can be 'in progress')*/
           descriptio: "do a web developer"}],

      display: function(){
          $("#workExperience").append(HTMLworkStart.replace("%data%",bio.jobs));
          $("#workExperience").append(HTMLworkEmployer.replace("%data%",bio.employer));
          $("#workExperience").append(HTMLworkTitle.replace("%data%",bio.title)); 
          $("#workExperience").append(HTMLworkDates.replace("%data%",bio.dates));
          $("#workExperience").append(HTMLworkLocation.replace("%data%",bio.location));
          $("#workExperience").append(HTMLworkDescription.replace("%data%",bio.descriptio));


      }
    }
work.display();
// var education= {
//
//       schools: {[/*array of objects with*/
//            name:"King Saud Uneversity",
//            location: "Riyadh",
//            degree: "Bacholer",
//            majors: ["IS","MIS","CS"],/*array of Sring*/
//            dates: "20/1/2017", /*string (works with a hyphen between them)*/
//            url:"www.schools.com", /*(optional)*/
//          ]}
//       onlineCourses: {[/*array of objects with*/
//            title: "Cloud Computing",
//            school: "Dell",
//            dates: "20/1/2017",/*string (works with a hyphen between them)*/
//            url: "www.onlineCourses.com"]},
//
//       display: function(){
//
//
//       }
// }

// var projects ={
//
//       projects: {[/*array of objects with*/
//             title: "Strava",
//             dates: "10/10/2017",/*string (works with a hyphen between them)*/
//             description: "sport app",
//             images: ["urlImag","urlImag","urlImag"]/*array with string urls*/]},
//       display: function(){
//
//
//       }
//
//     }
