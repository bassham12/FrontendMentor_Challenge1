const featuresArrowBtn = document.querySelector('#features-arrow-btn');
const featuresList = document.querySelector('#features-droplist');
const companyArrowBtn = document.querySelector('#company-arrow-btn');
const companyList = document.querySelector('#company-droplist');

let arrowDown = true;

featuresArrowBtn.addEventListener("click", () => {
    if (arrowDown == true) {
        featuresArrowBtn.style.backgroundImage = `url("/images/icon-arrow-up.svg")`;
        featuresList.style.display = "block";
        arrowDown = false;
    }
    else {
        featuresArrowBtn.style.backgroundImage = `url("images/icon-arrow-down.svg")`;
        featuresList.style.display = "none";
        arrowDown = true;
    }
})

companyArrowBtn.addEventListener("click", () => {
    if (arrowDown == true) {
        companyArrowBtn.style.backgroundImage = `url("/images/icon-arrow-up.svg")`;
        companyList.style.display = "block";
        arrowDown = false;
    }
    else {
        companyArrowBtn.style.backgroundImage = `url("images/icon-arrow-down.svg")`;
        companyList.style.display = "none";
        arrowDown = true;
    }
})


const navOpenIcon = document.querySelector('#menu-icon');
const sideBar = document.querySelector('.side-menu');

navOpenIcon.addEventListener("click", () => {
    sideBar.style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})


const navCloseIcon = document.querySelector('#close-menu-btn');

navCloseIcon.addEventListener("click", () => {
    sideBar.style.display = "none";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
})