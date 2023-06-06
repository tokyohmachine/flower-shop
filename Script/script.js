// Price

function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }


  document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.getElementById('priceDropdownToggle');
    var rangeSlider = document.getElementById('priceRangeSlider');
    var symbolSpan = dropdownToggle.querySelector('.material-symbols-outlined');

    rangeSlider.style.display = 'none';

    dropdownToggle.addEventListener('click', function() {
      if (rangeSlider.style.display === 'none') {
        rangeSlider.style.display = 'block';
        symbolSpan.textContent = 'remove';
      } else {
        rangeSlider.style.display = 'none';
        symbolSpan.textContent = 'add';
      }
    });
  });

// Colors

  document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.getElementById('colorDropdownToggle');
    var dropdownMenu = dropdownToggle.nextElementSibling;
    var colorOptions = dropdownMenu.getElementsByClassName('color-option');
    var symbolSpan = dropdownToggle.querySelector('.material-symbols-outlined');

    var selectedColor = null;
    var isOpen = false;

    dropdownToggle.addEventListener('click', function() {
      isOpen = !isOpen;
      dropdownMenu.style.display = isOpen ? 'block' : 'none';
      symbolSpan.textContent = isOpen ? 'remove' : 'add';
    });

    for (var i = 0; i < colorOptions.length; i++) {
      var colorOption = colorOptions[i];

      // Set the background color of the color option
      colorOption.style.backgroundColor = colorOption.dataset.color;

      colorOption.addEventListener('click', function() {
        var color = this.dataset.color;
        selectedColor = color;
        // You can perform any action here with the selected color
        console.log('Selected color:', color);
        dropdownMenu.style.display = 'none';
        isOpen = false;
        symbolSpan.textContent = 'add';
        updateSelectedColor(color);
      });
    }

    document.addEventListener('click', function(event) {
      if (!dropdownToggle.contains(event.target)) {
        dropdownMenu.style.display = 'none';
        isOpen = false;
        symbolSpan.textContent = 'add';
      }
    });

    function updateSelectedColor(color) {
      var selectedColorElement = document.createElement('div');
      selectedColorElement.classList.add('selected-color');
      selectedColorElement.style.backgroundColor = color;
      dropdownToggle.innerHTML = '';
      dropdownToggle.appendChild(selectedColorElement);
    }
  });

  

  $(document).ready(function() {
    $('.slider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      prevArrow: '<button class="custom-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button class="custom-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"><i class="fas fa-chevron-right"></i></button>'
    });
  });
  
  
  
 
  
  
  
