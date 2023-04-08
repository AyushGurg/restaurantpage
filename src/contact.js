let contactInfo = document.createElement("div");

function contact() {
  contactInfo.id = "contactInfo";

  document.body.appendChild(contactInfo);

  let contactTitle = document.createElement("div");
  contactTitle.id = "contactTitle";

  contactTitle.innerHTML = "Contact";

  let contactBody = document.createElement("div");
  contactBody.id = "contactBody";

  contactBody.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quibusdam error omnis, minima adipisci eius saepe aspernatur fugiat quod maiores est earum nobis eligendi temporibus facere accusamus odit, totam officia? Fugit officia nisi dolores et eligendi cumque iure similique dignissimos voluptatum ullam, esse architecto eveniet perspiciatis atque ut quisquam quia sequi ex amet vitae, facere provident! Minima id vero alias maiores doloremque placeat porro, cumque, aperiam fuga qui dolore. Incidunt enim sapiente tempore porro nisi suscipit impedit ut illo ullam inventore explicabo error quidem, dignissimos nam, ab fugiat nostrum laboriosam vitae nobis consequuntur magni nesciunt nihil. Et maxime consectetur corporis?";

  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(contactBody);
}

function removecontact() {
  document.body.removeChild(contactInfo);
}

export { contact, removecontact };
