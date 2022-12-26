let form= document.querySelector('#form');
form.addEventListener('submit',()=>{
    let formFile= document.querySelector('#formFile').files[0];
    let formFileName= formFile.name;
 
    let reader= new FileReader();
    reader.readAsDataURL(formFile);

    reader.addEventListener('load', function(){
        if(this.result && localStorage){
            let formFileList= localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')): [];
            formFileList.push(this.result);
            localStorage.setItem('images', JSON.stringify(formFileList));     
        }
    });
displayCard();

})

// view card
let displayCard= ()=>{
    let formFileList= localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')): [];

    if(formFileList.length !==0){
        let cardImg='';
        for(let img of formFileList){
            cardImg += `
            <div class="col-3">
            <div class="card">
              <img src="${img}" class="card-img-top" >
              <div class="card-body">
              <h3><h3>        
              </div>
            </div>
          </div>
          `
        }
        let cardRow= document.querySelector('#cardRow').innerHTML= cardImg;

    }
}
displayCard();

// remove
let removeCard= document.querySelector('#remove');
removeCard.addEventListener('click',function(){
    localStorage.removeItem('images');
    displayCard();
})