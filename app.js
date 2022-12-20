let convertBtn=document.querySelector('.convert');
let resetBtn=document.querySelector('.reset');
let valueBoxes=document.querySelectorAll('.box');
let gramValue=0;
let kgValue;

convertBtn.addEventListener('click',function(){  
    for(let i=0;i<valueBoxes.length;i++){
        if(valueBoxes[i].classList.contains('gram-value')){
            gramValue=parseFloat(valueBoxes[i].value);
            if(valueBoxes[i].value===''){
                alert('Enter A Value');
            }
        }else if(valueBoxes[i].classList.contains('kilogram-value')){
            kgValue=parseFloat(gramValue*0.001);
            valueBoxes[i].value=kgValue;
        }
        
    }
});
resetBtn.addEventListener('click',function(){
    for(let i=0;i<valueBoxes.length;i++){
        valueBoxes[i].value='';
    }
})