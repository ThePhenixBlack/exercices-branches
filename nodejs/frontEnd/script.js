const div = document.getElementById("div");

const name1 = document.getElementById("name");
const hellomsg = document.getElementById("hello");

function validate() {
  const nameUser = name1.value;
  document.location.href = "menu.html?name=" + encodeURIComponent(nameUser);
}
const urlParams = new URLSearchParams(window.location.search);
const nameUser = urlParams.get("name");

const p = document.createElement("p");
p.innerText = `Bonjour ${nameUser}`;
hellomsg.appendChild(p);

async function menuNode() {
  let response = await fetch("http://localhost:3000/menu");
  let data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    div.appendChild(li);
    li.innerText = ` ${data[i].plate} ${data[i].image} `;

    let button = document.createElement("button");
    div.appendChild(button);
    button.innerText = "Commander";
  }
}
menuNode();
