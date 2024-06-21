let btn = document.getElementById('btn')
let cards = document.getElementById('cards')

 function random() {
  let url = 'https://jsonplaceholder.typicode.com/users/';
  let randomnum = Math.floor(Math.random()*10)+1

  fetch(url + randomnum)
   .then((res) => res.json())
   .then((data) => getUser((data)) ); 

   function getUser(param) {
    let title = document.createElement('h1')

    title.innerHTML = param?.name

    cards.appendChild(title)
   }
 }

 btn.addEventListener('click', ()=>{
  cards.innerHTML = ''
  random()
 } )
 btn.style.width = '300px'
 btn.style.height = '100px'
 btn.style.backgroundColor = 'green'
 btn.style.color = 'white'

 





