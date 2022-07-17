const featuresArrowBtn = document.querySelector('#features-arrow-btn');
const featuresList = document.querySelector('#features-droplist');
const companyArrowBtn = document.querySelector('#company-arrow-btn');
const companyList = document.querySelector('#company-droplist');

let arrowDown = true;

featuresArrowBtn.addEventListener("click", () => {
    if (arrowDown == true) {
        featuresArrowBtn.style.backgroundImage = `url("/images/icon-arrow-up.svg")`;
        featuresList.style.visibility = "visible";
        arrowDown = false;
    }
    else {
        featuresArrowBtn.style.backgroundImage = `url("images/icon-arrow-down.svg")`;
        featuresList.style.visibility = "hidden";
        arrowDown = true;
    }
})

companyArrowBtn.addEventListener("click", () => {
    if (arrowDown == true) {
        companyArrowBtn.style.backgroundImage = `url("/images/icon-arrow-up.svg")`;
        companyList.style.visibility = "visible";
        arrowDown = false;
    }
    else {
        companyArrowBtn.style.backgroundImage = `url("images/icon-arrow-down.svg")`;
        companyList.style.visibility = "hidden";
        arrowDown = true;
    }
})