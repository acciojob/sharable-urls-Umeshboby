// your code here
let heading = document.getElementById("url");
let form = document.querySelector("form");
let nameText = document.getElementById("name");
let year = document.getElementById("year");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    
    if(nameText.value !== "" && year.value !== ""){
        heading.innerText = heading.innerText + `?name=${nameText.value}&year=${year.value}`;
        console.log(heading.innerText);
    }
    else if (nameText.value == "" && year.value !== ""){
        heading.innerText = heading.innerText + `?year=${year.value}`;
        console.log(heading.innerText);
    }
    else if(nameText.value !== "" && year.value == ""){
        heading.innerText = heading.innerText + `?name=${nameText.value}`;
        console.log(heading.innerText);
    }
}