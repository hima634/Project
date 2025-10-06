
const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
 
let dropdowns= document.querySelectorAll('.dropdowns select');
let btn= document.querySelector('button');
let toCurr=document.querySelector('.to select');
let fromCurr=document.querySelector('.from select');
let msg=document.querySelector('.msg');




for(let select of dropdowns){
    for(currCode in countryList){
        let newOptions=document.createElement('option');
        newOptions.innerText=currCode;
        newOptions.value=currCode;
         if(select.name==="from" && currCode==="USD"){
             newOptions.selected="selected";
         }else if(select.name==="to" && currCode==="INR"){
            newOptions.selected="selected";
        }
        select.append(newOptions);
    }
    select.addEventListener('change',(eve)=>{
        UpdateFlag(eve.target);  // eve.target- in which value in changing
        
    })
}


 let UpdateFlag=(element)=>{
    let currCode=element.value;
    let CountryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${CountryCode}/flat/64.png`;
    let img= element.parentElement.querySelector('img');
     img.src=newSrc;
 }


 const ExchangeRate= async ()=>{
    let amount=document.querySelector('.amount input');
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
       amtVal=1;
       amount.value="1";
    }

    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
     
     let responce= await fetch(URL);
     let data= await responce.json();
     let rate= data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

     //final amoutn
     let finalAmount= amtVal*rate;
     msg.innerText= `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
 }

 //btn
 btn.addEventListener('click', (eve)=>{
     eve.preventDefault();
     ExchangeRate();
        
 })

 //when load window 

 window.addEventListener('load',()=>{
    ExchangeRate();
 })
