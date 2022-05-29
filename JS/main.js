const featureDropdown = document.getElementById("features");
let featureCounter = 0;
let companyCounter = 0;

featureDropdown.addEventListener("click", () => {

    const featureDownArrow = document.getElementById("features-down-arrow");
    const featureUpArrow = document.getElementById("features-up-arrow");
    const featureDropList = document.getElementById("features-droplist");
    featureCounter += 1;

    if (featureCounter == 1) {
        featureDownArrow.style.visibility="hidden";
        featureUpArrow.style.visibility="visible";
        featureDropList.style.visibility="visible";
    }
    else {
        featureDropList.style.visibility="hidden";
        featureUpArrow.style.visibility="hidden";
        featureDownArrow.style.visibility="visible";
        
    }

    if (featureCounter > 1) featureCounter = 0;
    console.log(featureCounter);
});

const companyDropdown = document.getElementById("company");

companyDropdown.addEventListener("click", () => {

    const companyDownArrow = document.getElementById("company-down-arrow");
    const companyUpArrow = document.getElementById("company-up-arrow");
    const companyDropList = document.getElementById("company-droplist");
    companyCounter += 1;

    if (companyCounter == 1) {
        companyDownArrow.style.visibility="hidden";
        companyUpArrow.style.visibility="visible";
        companyDropList.style.visibility="visible";
    }
    else {
        companyDropList.style.visibility="hidden";
        companyUpArrow.style.visibility="hidden";
        companyDownArrow.style.visibility="visible";
        
    }

    if (companyCounter > 1) companyCounter = 0;
    console.log(companyCounter);
});