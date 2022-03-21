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
