function menu() {
  const MENUSIZE = 6;
  let menuList = [];
  let menuPage = document.createElement("menuPage");
  menuPage.id = "menuPage";

  document.body.appendChild(menuPage);
  for (let i = 0; i < MENUSIZE; i++) {
    menuList[i] = document.createElement("div");
    menuList[i].id = "menuList" + i;
    menuPage.appendChild(menuList[i]);
  }
}

function removemenu() {
  document.body.removeChild(menuPage);
}
export { menu, removemenu };
