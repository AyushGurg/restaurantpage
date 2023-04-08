import { header } from "./header.js";
import { main, removemain } from "./mainpage.js";
import { menu, removemenu } from "./menu.js";
import { contact, removecontact } from "./contact.js";

header();
main();

let homeButton = document.getElementById("home");
let menuButton = document.getElementById("menu");
let contactButton = document.getElementById("contact");

let current = "main";

homeButton.addEventListener("click", () => {
  switch (current) {
    case "menu":
      removemenu();
      current = "main";
      break;
    case "contact":
      removecontact();
      current = "main";
      break;
    default:
      break;
  }
  main();
});
menuButton.addEventListener("click", () => {
  switch (current) {
    case "main":
      removemain();
      current = "menu";
      break;
    case "contact":
      removecontact();
      current = "menu";
      break;
    default:
      break;
  }
  menu();
});
contactButton.addEventListener("click", () => {
  switch (current) {
    case "main":
      removemain();
      current = "contact";
      break;
    case "menu":
      removecontact();
      current = "contact";
      break;
    default:
      break;
  }
  contact();
});
