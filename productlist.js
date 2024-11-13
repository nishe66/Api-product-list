

let mainDiv = document.getElementById('container')


fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((data) => {
     data.products.map((item) => {
        let productDiv = document.createElement('div');
        productDiv.classList.add("product-div");
        productDiv.innerHTML = `
        
        <img class="product-img" src="${item.thumbnail}" alt="#">
          
        <div class="icon">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-brands fa-searchengin"></i> 
        </div>

        <h3 class="heading">${item.title}</h3>

        <div class="circle-div">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        </div>

       <div class="price">
       <span class="dis-price">$${item.discountPercentage}</span>
       <span class="price-range">$${item.price}</span>
       </div>
       `;
        
    mainDiv.appendChild(productDiv);

   }) 
        
  });
    
      
        
  

    
    
     
    
 