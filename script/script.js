"use strict";

////////////////decleration////////////////////
let customerName = document.querySelector(".form-control");
let count = document.querySelector("#count");
let selectType = document.querySelector("#selectType");
let selectTime = document.querySelector("#selectTime");
let selectAllergies = document.querySelector("#selectAllergies");
let messageAlert = document.querySelector(".message");
let messageAlert2 = document.querySelector(".message2");
let messageAlert3 = document.querySelector(".message3");
let messageAlert4 = document.querySelector(".message4");
let messageAlert5 = document.querySelector(".message5");
let submitBtn = document.querySelector("#submitBtn");
let welcomeUser = document.querySelector("#welcomeUser");
let showBtn = document.querySelector("#changeBtn");
let table = document.querySelector("#cupcake-table");

///////////// Validation ////////////////////////
submitBtn.addEventListener("click", function (nameValidation) {
  nameValidation.preventDefault();
  if (
    customerName.value.length < 5 ||
    customerName.value.length > 16 ||
    customerName.value == ""
  ) {
    messageAlert.innerHTML = "The name must be between 5 and 16 charachters";
  } else {
    messageAlert.innerHTML = "";

    localStorage.setItem(`username`, customerName.value);
  }
  if (count.value < 1 || count.value > 15) {
    messageAlert2.innerHTML = "The count must be between 1 and 15";
  } else {
    messageAlert2.innerHTML = "";
  }
  if (selectType.value == "None") {
    messageAlert3.innerHTML = "you must choice type";
  } else {
    messageAlert3.innerHTML = "";
  }
  if (selectTime.value == "None") {
    messageAlert4.innerHTML = "you must choice time";
  }
  if (
    selectType.value == "Chocolate" &&
    selectAllergies.value == "Dairy free"
  ) {
    messageAlert5.innerHTML = "chocolate can't be dairy free";
  } else {
    messageAlert5.innerHTML = "";
  }
  if (selectType.value == "Pecan" && selectAllergies.value == "Nut free") {
    messageAlert5.innerHTML = "pecan can't be nut free";
  } else {
    messageAlert5.innerHTML = "";
  }
  if (selectType.value == "Chocolate" && selectTime.value == "4:00 PM") {
    messageAlert4.innerHTML = "chocolate can't be delevired at 4:00 pm ";
  } else {
    messageAlert4.innerHTML = "";
  }
});
/////////////////////////welcoming user with his/her name /////////////////////////////
showBtn.addEventListener("click", showName);
function showName() {
  let getUser = localStorage.getItem("username");

  welcomeUser.innerHTML = `Welcome ${getUser}!`;
}
/////////////////////table//////////////////////////////////////////
$(document).ready(show_cupcakes);
let cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];
show_cupcakes(cup_cakes);

function show_cupcakes(data) {
  for (let i = 0; i < data.length; i++) {
    let headerRow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerHTML = `${data[i].name}`;
    td2.innerHTML = `${data[i].calories}`;
    td3.innerHTML = `${data[i].weight}`;
    headerRow.appendChild(td1);
    headerRow.appendChild(td2);
    headerRow.appendChild(td3);
    table.appendChild(headerRow);
    if (data[i].calories == "high") {
      td2.style.background = "red";
    } else if (data[i].calories == "medium") {
      td2.style.background = "orange";
    } else {
      td2.style.background = "green";
    }
  }

  //write code that shows the cupcakes in the table as per the instructions
}
