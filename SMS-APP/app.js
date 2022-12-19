let inputEl= document.querySelector('#FormControlTextarea1');
let text= document.querySelector('#text');

inputEl.addEventListener('keyup', ()=>{
    let result= inputEl.value.length;
   text.innerText=result;
})