let mainpage = document.createElement("div");
let intro = document.createElement("div");
let hour = document.createElement("div");
let address = document.createElement("div");

function main() {
  mainpage.id = "mainpage";
  intro.id = "intro";
  hour.id = "hour";
  address.id = "address";

  mainpage.appendChild(intro);
  mainpage.appendChild(hour);
  mainpage.appendChild(address);

  document.body.appendChild(mainpage);

  // Adding info about restaurant
  let introTitle = document.createElement("div");
  introTitle.id = "introTitle";
  let introBody = document.createElement("div");
  introBody.id = "introBody";

  intro.appendChild(introTitle);
  introTitle.innerHTML = "FOOD PLACE";
  intro.appendChild(introBody);
  introBody.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil possimus voluptate eveniet nesciunt incidunt asperiores maiores quasi commodi quibusdam iusto, mollitia necessitatibus eos! A labore molestias ut corporis aut eveniet eligendi doloribus repellat quas expedita velit optio, porro doloremque, earum possimus tenetur error tempora quisquam suscipit laborum. Labore, molestiae libero!";

  // Adding hours info of restaurant
  let hoursTitle = document.createElement("div");
  let hoursWeekday = document.createElement("div");
  let hoursWeekend = document.createElement("div");

  hoursTitle.id = "hoursTitle";
  hoursWeekday.id = "hoursWeekday";
  hoursWeekend.id = "hourWeekend";

  hoursTitle.innerHTML = "Hours";
  hoursWeekday.innerHTML = "Mon - Fri : 11:00 am to 12:00 pm";
  hoursWeekend.innerHTML = "Sat & Sun : 11:00 am to 2:00 am";

  hour.appendChild(hoursTitle);
  hour.appendChild(hoursWeekday);
  hour.appendChild(hoursWeekend);
}

function removemain() {
  document.body.removeChild(mainpage);
}
export { main, removemain };
