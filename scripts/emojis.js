"use strict";


const table = document.getElementById("userTable");

window.onload = init;

function init() {
  showEmojis();
}

function showEmojis() {
  console.log("clicked");

  let theUrl = "https://emojihub.yurace.pro/api/all";
  fetch(theUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell();
         
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();


            cell1.innerHTML = data[i].name;
        
            cell2.innerHTML = data[i].htmlCode;
            cell3.innerHTML = data[i].unicode;
            cell4.innerHTML = data[i].category;

        }
    });
}
