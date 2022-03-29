
// OPEN/CLOSE MENU => onClick Icons: Bullets & X //

const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show")
  })
}

// WHEN CLICK MENU => HIDE MENU //

const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.toggle("show")
  })
}

// CHANGE PAGE HEADER ON SCROLL //

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    //SCROLL > HEADER HEIGHT
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
    // SCROLL < HEADER HEIGHT
  }
})




    
    //===============COURSES ARRAY======================//


    const courses = [{
      name: "Fullstack Developer Bootcamp",
      date: "03/2022",
      where: "Udemy",
      status: "Ongoing",
    },
    {
      name: "JavaScript Essential Training",
      date: "03/2022",
      where: "LinkedIn",
      status: "Finished",
    },
    {
      name: "Smart Contract Developer",
      date: "02/2022",
      where: "Blockchain Council",
      status: "Finished",
    },

    {
      name: "Comptia A+",
      date: "10/2020",
      where: "The Training Room",
      status: "Finished",
    }
    ];

    let courseTitle = [];
    let dateFinalized = [];
    
    courses.forEach(course => {
      for (let key in course) {
        
        if (key === 'name') {
          courseTitle.push(course[key]);
        }
        if (key === 'date') {
          dateFinalized.push(course[key]);
        }
      }
    });
    
    console.log('date', dateFinalized);
    console.log('name', courseTitle);
    
    const courseList = $.map(courseTitle, function(value){
      return `<div class="courseTitleIndex">` + value + "</div>";
    });
    
    const dataFinalizedList = $.map(dateFinalized, function(value){
      return `<div class="date">` + value + "</div>";
    });
    
    // jquery HTML so aceita uma function
    // pq vc nao pode ter duas tags <html> dentro de um arquivo
    $('#course0').append(courseList[0]);
    $('#course1').append(courseList[1]);
    $('#course2').append(courseList[2]);
    $('#course3').append(courseList[3]);

    $('#status0').append(dataFinalizedList[0]);
    $('#status1').append(dataFinalizedList[1]);
    $('#status2').append(dataFinalizedList[2]);
    $('#status3').append(dataFinalizedList[3]);


     //============JOBS ARRAY===============//

     let jobs = [{
      role: "IT Technician",
      company: "NetServe LTD",
      period: "03/2020" + " - " + "06/2021"
    },
    {
      role: "Workshop Operative",
      company: "Taylormade Golf",
      period: "03/2020" + " - " + "06/2021"
    },
    {
      role: "Ecommerce Manager",
      company: "Vitrine Refrigeracao",
      period: "03/2020" + " - " + "06/2021"
    },
    {
      role: "IT Support Technician Jr.",
      company: "DisDal",
      period: "03/2020" + " - " + "06/2021"
    }
    ]

    let jobList = [];
    let periodList = [];
    
    jobs.forEach(role => {
      for (let key in role) {
        
        if (key === 'role') {
          jobList.push(role[key]);
        }
        if (key === 'period') {
          periodList.push(role[key]);
        }
      }
    });
    

    // jquery HTML so aceita uma function
    // pq vc nao pode ter duas tags <html> dentro de um arquivo
    $('#job0').append(jobList[0]);
    $('#job1').append(jobList[1]);
    $('#job2').append(jobList[2]);
    $('#job3').append(jobList[3]);

    $('#period0').append(periodList[0]);
    $('#period1').append(periodList[1]);
    $('#period2').append(periodList[2]);
    $('#period3').append(periodList[3]);
