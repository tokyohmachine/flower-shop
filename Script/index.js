// The iamges appears in the shop-all page in grid
// when i click on each image i will be directed to their page, where i can
// see the information about that specific product

window.onload = function() {
    const source = document.getElementById('homeProducts').innerHTML;
    const template = Handlebars.compile(source);

const context = {
    productHome: [
      {
      description: "Bouquet",
      image: "Images/shop-all/news-flowers/1.webp",
      price: "$28.00",
      
      },
      {
        description: "Bouquet",
        image: "Images/shop-all/news-flowers/2.webp",
        price: "$28.00",
       
      },
      {
        description:"Bouquet",
        image: "Images/shop-all/news-flowers/4.webp",
        price: "$28.00",
        
      },
      
      {
        description: "Bouquet",
        image: "Images/shop-all/news-flowers/5.webp",
        price: "$75.00",
        
        
      },
      {
        description: "Bouquet",
        image: "Images/shop-all/news-flowers/6.webp",
        price: "$75.00",
       
        
      },
      
      {
        description: "Bouquet",
        image: "Images/shop-all/news-flowers/7.webp",
        price: "$100.00",
        
      },
      {
        description: "Bouquet",
        image: "Images/shop-all/news-flowers/8.webp",
        price: "$100.00",
        
      },
      
      {
        description: "Bouquet",
        image: "Images/shop-all/news-flowers/9.webp",
        price: "$100.00",
        
      }
    
  ]};

  const compiledHome = template(context);
  const containerHome = document.getElementById('homeShop');
  containerHome.innerHTML = compiledHome;
};



$(document).ready(function() {
  $("#menuToggle").click(function () {
    $("#menu").toggle();
   
  });
  
  $('.second-card').on('mouseover', function() {
    $(this).find("#home-shop-button").show('fast');
  });

  $('.second-card').on('mouseleave', function() {
    $(this).find('#home-shop-button').hide('fast');
  });

});
