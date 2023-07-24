$(document).ready(function() {
    
// Get the template source
// const sourceImage = document.getElementById('productDetailsImg').innerHTML;
// const templateImage = Handlebars.compile(sourceImage);

// const imageData = {
//   images: [
//     {
//     image: "Images/shop-all/Carnation/yellow-carnation.jpg"
//   }
// ]};

// const renderedImageHtml = templateImage(imageData);
// document.getElementById('imageDetails').innerHTML = renderedImageHtml;

// when i click on the image will be redirected by this
// <a href="product-details.html?sku={{this.sku}}" >
// to the product-details.html

// Get the SKU from the URL parameter

// ================================================================================



// Toggle content
$('#productInfoToggle').on('click', function() {
    const content = $('#productInfoContent');
    const symbol = $(this).find('.material-symbols-outlined');

    content.slideToggle();
    symbol.text(symbol.text() === '+' ? '-' : '+');
});

$('#returnPolicyToggle').on('click', function() {
    const content = $('#returnPolicyContent');
    const symbol = $(this).find('.material-symbols-outlined');

    content.slideToggle();
    symbol.text(symbol.text() === '+' ? '-' : '+');
});

$('#shippingInfoToggle').on('click', function() {
    const content = $('#shippingInfoContent');
    const symbol = $(this).find('.material-symbols-outlined');

    content.slideToggle();
    symbol.text(symbol.text() === '+' ? '-' : '+');
});


// quantity
$('#incrementBtn').on('click', function() {
    const quantityInput = $('#quantityInput');
    let quantity = parseInt(quantityInput.val());
    quantity += 1;
    quantityInput.val(quantity);
});

$('#decrementBtn').on('click', function() {
    const quantityInput = $('#quantityInput');
    let quantity = parseInt(quantityInput.val());
    if (quantity > 1) {
        quantity -= 1;
        quantityInput.val(quantity);
    }
});







});