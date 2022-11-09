// ==================================
// lvl 1_2
// ==================================

// function myFunction() {
//     let exampleElements = document.querySelectorAll(".example");
//     console.log(exampleElements)

//     exampleElements.forEach(element => element.classList.toggle("changed"));
// }

// ==================================
// lvl 2_1
// ==================================

// const navChangeButton = document.querySelector("#navChange");
// const navHome = document.querySelector("#navHome");
// console.log(navHome)
// navChangeButton.addEventListener("click", () => {
//     navHome.classList.toggle("rotate");
// })

// ==================================
// lvl 2_2
// ==================================

// const submitButton = document.getElementById("submit");

// submitButton.addEventListener("click", () => {
//     const firstName = document.getElementById("vorname");
//     const firstNameValue = firstName.value;

//     const lastName = document.getElementById("nachname");
//     const lastNameValue = lastName.value;

//     const country = document.getElementById("land");
//     const countryValue = country.value;

//     console.log("first name: ", firstNameValue, " last name: ", lastNameValue, "country: ", countryValue)

// })

// ==================================
// lvl 2_3
// ==================================
// Nutze die Methode getElementById
// Nutze die Methode getElementsByTagName
// Farben: #f6c89f, #ffe7d1, #4b8e8d, #396362, #666, #333
// Denk an den index[]

// const navChangeButton2 = document.getElementById("navChange2");

// let allLiAElements = document.getElementsByTagName("a");
// let arrayLiAElements = Array.from(allLiAElements);

// function navChange2() {
//     arrayLiAElements.forEach((li) => {
//         console.log(li.innerText)
//         console.log(li)
//         if (li.innerText === "Home") {
//             li.classList.toggle("bg1");
//         } else if (li.innerText === "News") {
//             li.classList.toggle("bg2");
//         } else if (li.innerText === "Contact") {
//             li.classList.toggle("bg3");
//         } else if (li.innerText === "Change me") {
//             li.classList.toggle("bg4");
//         }
//     })
// }

// ==================================
// lvl 2_4
// ==================================

let buttonClick = document.getElementById("button");
let backgroundForm = document.getElementById("exercise2_4");

buttonClick.addEventListener("click", (event) => {
    event.preventDefault;

    let colorSelector = document.getElementById("farbeAuswahlen").value;
    let colorSelectorSpaceless = colorSelector.replace(" ", "");

    backgroundForm.style.backgroundColor = colorSelectorSpaceless;
})