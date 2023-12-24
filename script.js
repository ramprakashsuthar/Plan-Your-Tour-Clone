var MenuItem = document.querySelector("#MenuItem");
var destiSubMenu = document.querySelector("#destiSubMenu");
// Get a reference to the submenu
var submenu = document.querySelector(".subNav");
var destisubnav = document.querySelector(".destisubNav");

destiSubMenu.addEventListener("click", (event) => {
    event.preventDefault();
    submenu.classList.toggle("subnavShow");
    destisubnav.classList.remove("subnavShow");
})
MenuItem.addEventListener("click", function (event) {
    event.preventDefault();

    destisubnav.classList.toggle("subnavShow");
    submenu.classList.remove("subnavShow");

});


var hamburger = document.querySelector(".hamburger-toggle");
var spanFirst = document.querySelector(".hamburger-toggle .hamburger span:first-child");
var span = document.querySelector(".hamburger-toggle .hamburger span:nth-child(2)");
var spanLast = document.querySelector(".hamburger-toggle .hamburger span:last-child");
var isOpen = false; // Keep track of the menu state
var navbarShow = document.querySelector(".navbar");
var navbarClose = document.querySelector(".navbar>figure>span");
console.log(spanFirst)
console.log(spanLast)

hamburger.addEventListener("click", () => {
    isOpen = !isOpen; // Toggle the menu state

    if (isOpen) {
        // Change to cross (X) sign
        spanFirst.style.transform = "rotate(45deg)";
        spanFirst.style.top = "45%";
        span.style.opacity = "0"; // Hide the middle span
        spanLast.style.top = "45%";
        spanLast.style.transform = "rotate(-45deg)";
        navbarShow.style.display = "block";

    } else {
        // Reset to hamburger icon
        spanFirst.style.transform = "rotate(0) translate(0, 0)";
        span.style.opacity = "1"; // Show the middle span
        spanLast.style.transform = "rotate(0) translate(0, 0)";
        spanFirst.style.top = "10%";
        spanLast.style.top = "auto";
        navbarShow.style.display = "none";
    }
})
navbarClose.addEventListener("click", () => {
    navbarShow.style.display = "none";
    spanFirst.style.transform = "rotate(0) translate(0, 0)";
    span.style.opacity = "1"; // Show the middle span
    spanLast.style.transform = "rotate(0) translate(0, 0)";
    spanFirst.style.top = "10%";
    spanLast.style.top = "auto";
})

// manali tour package for family javascript

var manaliBanner=document.querySelector(".manalibannerInner figure");
var bannerImgTag=document.querySelector(".manalibannerInner figure img");
var gallery=document.querySelector(".caurosal");

gallery.addEventListener("click",(event)=>{
    var currentImgPath=event.target.src;
    if(currentImgPath!=undefined && currentImgPath!=null && currentImgPath!=""){
        bannerImgTag.src=currentImgPath;
    }
});

var daysButtons = document.querySelectorAll(".days button");

// Add a click event listener to each button
daysButtons.forEach((button, index) => {
    // Get the corresponding content element for the current button
    var daysContent = document.querySelectorAll(".daysContent")[index];
// console.log(daysContent)
    button.addEventListener("click", () => {
        // Toggle the class "daysContentShow" on the associated content
        daysContent.classList.toggle("daysContentShow");
    });
});
