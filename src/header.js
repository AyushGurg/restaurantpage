function header() {
  let header = document.createElement("div");
  header.id = "header";
  document.body.appendChild(header);

  let home = document.createElement("div");
  home.id = "home";
  let menu = document.createElement("div");
  menu.id = "menu";
  let contact = document.createElement("div");
  contact.id = "contact";

  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "Contact";
}

export { header };
