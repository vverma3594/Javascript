let inputEl= document.querySelector('#InputEmail1');
let rangeEl= document.querySelector('#customRange1');
let resultEl= document.querySelector('#result');
let inputVl=document.querySelector('#inputValue')
let rangeVl=document.querySelector('#rangeValue')

inputEl.addEventListener('keyup',()=>{
    inputVl.innerText=inputEl.value;
    result();
})

rangeEl.addEventListener('change',()=>{
    rangeVl.innerText=rangeEl.value;
    result();
})

let result=()=>{
    resultEl.innerText= inputVl.innerText * rangeVl.innerText;
}


