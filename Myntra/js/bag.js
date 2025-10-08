   let bagItemObjects;
   const Convenience_fee=99;
   onLoad();
   function onLoad(){
       loadBagItemObjects();
       displayBagItem();
       displayBagSummary();
   }

   function displayBagSummary(){
    let bagSummaryElement=document.querySelector('.bag-summary');
      let bagitem=bagItemObjects.length;
      let totalMrp=0;
      let totalDiscount=0;
      let totalAmt=0;
      bagItemObjects.forEach(bagitem =>{
           totalMrp += bagitem.original_price;
            totalDiscount += bagitem.original_price-bagitem.current_price;
        })
        totalAmt= totalMrp-totalDiscount+Convenience_fee;
      
     let innerHtml=`
        <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${bagitem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs${totalMrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs${Convenience_fee}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${totalAmt}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
          `;

        bagSummaryElement.innerHTML= innerHtml;
   }





    function removeItem(itemId){
      bagItems= bagItems.filter(item => item!=itemId);
       localStorage.setItem('bagItem',JSON.stringify(bagItems));
       onLoad();
       displayBagIcon();
    }


   function loadBagItemObjects(){
   bagItemObjects=  bagItems.map((itemId)=>{
          for(let i=0;i<items.length;i++){
            if(itemId == items[i].id){
                return items[i];
            }
          }
     })
   };
   console.log(bagItemObjects);
    

function displayBagItem(){
  let containerElement=document.querySelector('.bag-items-container');
    let innerHTML='';
    bagItemObjects.forEach(bagitem => {
        innerHTML += genrateItemHtml(bagitem);
    });
  containerElement.innerHTML=innerHTML;
   
}

function genrateItemHtml(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="prize">
        <span class="curr-prize">Rs ${item.current_price}</span>
        <span class="orig-prize">Rs ${item.original_price}</span>
        <span class="discount">(${item. discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeItem(${item.id})">X</div>
  </div>

`;
}