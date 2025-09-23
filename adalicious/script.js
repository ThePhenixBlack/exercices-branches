const name1 = document.getElementById('name')
const hellomsg = document.getElementById('hello')

function validate() {
  const nameUser = name1.value
  document.location.href = "adalicious.html?name=" + encodeURIComponent(nameUser)
}
const urlParams = new URLSearchParams(window.location.search)
const nameUser = urlParams.get('name')

const p = document.createElement('p')
p.innerText = `Bonjour ${nameUser}`
hellomsg.appendChild(p)