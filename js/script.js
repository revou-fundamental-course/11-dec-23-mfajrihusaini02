let name = "M FAJRI HUSAINI";
const birthDate = 2001;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 2000);

const inputFirstName = document.getElementById("first-name-input");
const submitButton = document.getElementById("submit-button");

inputFirstName.addEventListener("keyup", function(event) {
    var firstName = inputFirstName.value;

    if (firstName == "") {
        submitButton.display = "none";
    } else {
        submitButton.display = "grid";
    }
})