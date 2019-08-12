import './scss/style.scss'
import ajax from './js/ajax.js'
import { throws } from 'assert';

let btn = document.querySelector('.ok');
btn.addEventListener('click',function(e){
    e.preventDefault();
    let name = document.querySelector('.name').value;
    let tel = document.querySelector('.tel').value;
let data = {
    "name":name,
    "tel":tel
}
ajax('./src/php/form1.php','POST',asd,data);
function asd(result){
console.log(asd);
if(result==true){
    console.log('УРА');
}else{
    console.log('ОШИБКА');
}
}
})
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    let href = anchor.getAttribute('href')
    
    
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
})
}
let modalWrap = document.querySelector('.modal__wrap');
let risksBtn = document.querySelector('.risks__btn').addEventListener('click',function(e){
  e.preventDefault();
  modalWrap.classList.toggle('hide');
})
modalWrap.addEventListener('click',function(event){
let target = event.target;
event.preventDefault();
if(target.className !='modal__wrap') return
modalWrap.classList.add('hide');
});
let stepsBtn = document.querySelector('.steps__btn')
stepsBtn.addEventListener('click',function(e){
  e.preventDefault();
  modalWrap.classList.toggle('hide');
});
let buttonsBtn = document.querySelector('.buttons__btn')
buttonsBtn.addEventListener('click',function(e){
  e.preventDefault();
  modalWrap.classList.toggle('hide');
})
let win = document.querySelector('.window-btn');
win.addEventListener('click',function(e){
  e.preventDefault();
  let name = document.querySelector('.window-name').value;
  let tel = document.querySelector('.window-tel').value;
  let data = {
    "name1":name,
    "tel1":tel
}
ajax('./src/php/form2.php','POST',asd,data);
function asd(result){
if(result==true){
  console.log('УРА');
}else{
  console.log('ОШИБКА');
}
}
})