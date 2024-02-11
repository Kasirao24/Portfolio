var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}

let menu = document.querySelector('#check-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('check-icon');
    navlist.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('check-icon');
    navlist.classList.remove('active');
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzuLLS45uBaHBau_k6AzoCbDHjCBYj8UvSbtkCA0pqfzKPXUjigfwkKluCi-ZcKBuDx0w/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

  form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
         form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })





