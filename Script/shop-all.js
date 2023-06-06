const source = document.getElementById('shopAll').innerHTML;
const template = Handlebars.compile(source);

const context = {
  products: [
      {
        description: "Red roses",
        image: "Images/shop-all/red-roses.jpg",
        price: "$85.00",
        
      },
      {
        description: "Orange roses",
        image: "Images/shop-all/orange-rose.jpg",
        price: "$85.00",
        
      },
      {
        description: "Pink roses",
        image: "Images/shop-all/pink-roses.jpg",
        price: "$75.00",
        sale: "$65.00",
      },
      {
        description: "Yellow roses",
        image: "Images/shop-all/yellow-roses.jpg",
        price: "$75.00",
        sale: "$65.00",
      },
      {
        description: "Red roses",
        image: "Images/shop-all/red-roses.jpg",
        price: "$85.00",
        
      },
      {
        description: "Orange roses",
        image: "Images/shop-all/orange-rose.jpg",
        price: "$85.00",
        
      },
      {
        description: "Pink roses",
        image: "Images/shop-all/pink-roses.jpg",
        price: "$75.00",
        sale: "$65.00",
      },
      {
        description: "Yellow roses",
        image: "Images/shop-all/yellow-roses.jpg",
        price: "$75.00",
        sale: "$65.00",
      }
  ]};

const compiledHtml = template(context);
const container = document.getElementById('shop');
container.innerHTML = compiledHtml;


