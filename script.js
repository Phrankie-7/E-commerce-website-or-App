// Get all the "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.featured-products button');

// Loop through the buttons and add a click event listener to each one
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Display an alert message when the button is clicked
    alert('Item added to cart!');
  });
});
