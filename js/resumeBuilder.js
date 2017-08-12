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
        welcomeMessage: "Hello your welcome",
        skills: ["","",""],/*array of strings*/
        biopic: "google.com",/*url*/
        display: function(){
          $("#header").append(HTMLheaderName.replace("%data%",bio.name));
          $("#header").append(HTMLheaderRole.replace("%data%",bio.role));
          $("#topContacts").append(HTMLcontactGeneric.replace("%contact%",bio.contacts));
          $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
          $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
          $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
          $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
          $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
          $("#topContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
          $("#topContacts").append(HTMLbioPic.replace("%data%",bio.contacts.location));
          $("#topContacts").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
          $("#topContacts").append(HTMLskillsStart.replace("%data%",bio.skills)); //ithing its right
          $("#topContacts").append(HTMLskills.replace("%data%",bio.skills));

        }
}
bio.display();

var work ={

      jobs: [{/*array of objects with*/
           employer: "googleMap" ,
           title: "Web developer" ,
           location: "Riyadh",
           dates: "20/10/2017",/*string (Can be 'in progress')*/
           descriptio: "do a web developer", }]

      display: function(){


      }
    }

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
