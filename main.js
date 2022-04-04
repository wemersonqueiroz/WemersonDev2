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
// <!--========COURSE AND WORK ARRAYS===========-->

//===============COURSES ARRAY======================//

const courses = [
  {
    name: "Fullstack Developer",
    date: "03/2022",
    school: "Udemy",
    status: "Ongoing",
  },
  {
    name: "JavaScript Essential",
    date: "03/2022",
    school: "LinkedIn",
    status: "Finished",
  },
  {
    name: "Smart Contract Dev",
    date: "02/2022",
    school: "Blockchain Council",
    status: "Finished",
  },
  {
    name: "Ethereum Dev",
    date: "02/2022",
    school: "Udemy",
    status: "Finished",
  },
  {
    name: "Comptia A+",
    date: "10/2020",
    school: "The Training Room",
    status: "Finished",
  },
]
let courseTitle = []
let dateFinalized = []
let school = []

courses.forEach(course => {
  for (let key in course) {
    if (key === "name") {
      courseTitle.push(course[key])
    }
    if (key === "date") {
      dateFinalized.push(course[key])
    }
    if (key === "school") {
      school.push(course[key])
    }
  }
})

console.log("courseTitle", courseTitle)
console.log("dateFinalized", dateFinalized)
console.log("school", school)

const namesList = $.map(courseTitle, function (value) {
  return "<div class='row justify-content-start'>" + value + "</div>"
})
const schoolList = $.map(school, function (value) {
  return "<div class='row justify-content-center'>" + value + "</div>"
})
const dataFinalizedList = $.map(dateFinalized, function (value) {
  return "<div class='row justify-content-end'>" + value + "</div>"
})

$(".coursesNames").html(namesList)
$(".coursesDates").html(dataFinalizedList)
$(".coursesSchool").html(schoolList)

//============JOBS ARRAY===============//

let jobs = [
  {
    role: "Social Media Manager",
    company: "Lotus Media UK",
    period: "Jun 2021 - Present",
  },
  {
    role: "IT Technician",
    company: "NetServe LTD",
    period: "Mar 2020 - Jun 2021",
  },
  {
    role: "Workshop Operative",
    company: "Taylormade Golf",
    period: "Jan 2019 – Mar 2021",
  },
  {
    role: "Ecommerce Manager",
    company: "Vitrine Refrigeracao",
    period: "Jan 2010 – Sep 2014",
  },
  {
    role: "IT Technician Jr.",
    company: "DisDal",
    period: "Jan 2007 – Dec 2009",
  },
]

jobRole = []
jobCompany = []
jobPeriod = []

jobs.forEach(jobs => {
  for (let key in jobs) {
    if (key === "role") {
      jobRole.push(jobs[key])
    }
    if (key === "company") {
      jobCompany.push(jobs[key])
    }
    if (key === "period") {
      jobPeriod.push(jobs[key])
    }
  }
})

const jobsRoles = $.map(jobRole, function (value) {
  return `<div id="roles" class="row justify-content-start">` + value + "</div>"
})
$(".jobTitle").html(jobsRoles)

const jobsCompanies = $.map(jobCompany, function (value) {
  return (
    `<div id="companies" class="row justify-content-center">` + value + "</div>"
  )
})
$(".jobCompany").html(jobsCompanies)

const jobsPeriods = $.map(jobPeriod, function (value) {
  return `<div id="periods" class="row justify-content-end">` + value + "</div>"
})
$(".jobTime").html(jobsPeriods)
