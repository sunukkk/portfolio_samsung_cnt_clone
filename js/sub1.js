window.addEventListener('load', () => {

function addOn(el){
  el.classList.add('on');
}
function removeOn(el){
  el.classList.remove('on');
}

function toggleOn(el){
  el.classList.toggle('on');
}


const q1_label = document.querySelectorAll('.Q1 label')
const q2 = document.querySelector('.Q2')
const q2_label = document.querySelectorAll('.Q2 label')
const q3 = document.querySelector('.Q3')
const btn_submit = document.querySelector('.content>form>fieldset>input')
const q2_radio = document.querySelector('.Q2_radio')
const q2_h4 = document.querySelectorAll('.Q2 h4')
const q2_newwindow = document.querySelectorAll('.Q2_newwindow')

console.log(q2_radio)

let scroll = 0;
window.addEventListener('scroll', () =>{
  scroll = window.pageYOffset
  console.log(scroll)
})


q1_label[0].addEventListener('click', ()=>{
  q2.style.display = "block"
  q2.style.opacity ="1"
  q2.style.visibility = "visible"
  q2_h4[1].style.display = "none";
  q2_h4[0].style.marginBottom = "4%"
  q2_radio.style.display="flex"
  removeOn(q1_label[1])
  for(let i=0; i<q2_newwindow.length; i++){
    removeOn(q2_newwindow[i])}
  window.scroll({
    top: 920,
    behavior:'smooth'
  })
  addOn(q1_label[0]);
  removeOn(q2_radio)
  
  
})

q1_label[1].addEventListener('click', ()=>{
  q2.style.display = "block"
  q2.style.opacity ="1"
  q2.style.visibility = "visible"
  q2_h4[1].style.display = "block";
  q2_h4[0].style.marginBottom = "0%"
  q2_radio.style.display="none"
  removeOn(q1_label[0])
  for(let i=0; i<q2_newwindow.length; i++){
  addOn(q2_newwindow[i])}
  window.scroll({
    top: 920,
    behavior:'smooth'
  })
  addOn(q1_label[1]);
  q3.style.display="none"
  btn_submit.style.display = 'none'
}) 


for(let i=0; i<q2_label.length;i++){
  q2_label[i].addEventListener('click', ()=>{
    q3.style.display = "block"
    q3.style.opacity ="1"
    q3.style.visibility = "visible"
    btn_submit.style.display = "block";
    window.scroll({
      top: 1600,
      behavior:'smooth'
    })
  })
}
  

  function emailselect(){
    let Q3_email = document.querySelector('.Q3_email')
    let Q3_email_select = document.querySelector('.Q3_email_select')

    Q3_email.value = Q3_email_select.value
  }

})