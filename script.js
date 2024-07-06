// let a = document.getElementsByClassName("box");
// let b = document.getElementById("red");
// a[2].style.backgroundColor = "red";
// b.style.backgroundColor = "blue";

// let div = document.createElement("div");
// div.innerHTML = "i have been inserted";
// div.setAttribute("class", "box");
// document.querySelector(".container").append(div);

function createCard(title, cName, views, monthsOld, duration){
    let doc = document.querySelector(".container");
    let changeTitle = document.getElementById("title");
    changeTitle.innerHTML = title;
    let changeName = document.getElementById("cName");
    changeName.innerHTML = cName;
    let changeViews = document.getElementById("views");
    changeViews.innerHTML = views;
    let changeMonths = document.getElementById("monthsOld");
    changeMonths.innerHTML = monthsOld;
    let changeDuration = document.getElementById("duration");
    changeDuration.innerHTML = duration;
}

let title = "Installing VS CODE & How Websites Work";
let cName = "CodeWithHarry";
let views = "173k";
let monthsOld = "3 months";
let duration = "27:51";
createCard(title, cName, views, monthsOld, duration);