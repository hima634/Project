let bagItems;
onLoad();
function onLoad(){
let bagItemsStr=localStorage.getItem('bagItem');
 bagItems = bagItemsStr ? JSON.parse(bagItemsStr) :[];
displayItemOnHomePage();
displayBagIcon();
}
function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItem',JSON.stringify(bagItems));
    displayBagIcon();
}
 
function displayBagIcon(){
 let bagItemCount=document.querySelector('.bag-item-count');
  
  if(bagItems.length>0){
    bagItemCount.style.visibility='visible';
  bagItemCount.innerText=bagItems.length;
  }
  else{
    bagItemCount.style.visibility='hidden';
  }
}




function displayItemOnHomePage(){
let containerElement=document.querySelector('.items-container');
if(!containerElement){
    return;
}
 let innerHTML='';
items.forEach(item=>{
    innerHTML +=`
     <div class="item-container">
                <img class="item-img" src="${item.image}" alt="img">
                <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
                <div class="brand-name">${item.company}</div>
                 <div class="item-name">${item.item_name}</div>
                 <div class="prize">
                    <span class="curr-prize">Rs. ${item.current_price}</span>
                    <span class="orig-prize">Rs. ${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% OFF)</span>
                 </div>
                  <button  class="add-bag-btn" onclick="addToBag(${item.id})">Add to Bag</button>

            </div>
    `
 }
);
containerElement.innerHTML=innerHTML;
} 

