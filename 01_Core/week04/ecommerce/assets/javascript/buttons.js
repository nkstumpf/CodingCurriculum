
// buttons

const contactBtn = document.getElementById('contactBtn');
const shopNowBtn = document.getElementById('shopNowBtn');
const allProductsBtn = document.getElementById('allProductsBtn');

contactBtn.addEventListener('click', function() {
    window.location.href = "/contact.html";
})

shopNowBtn.addEventListener('click', function() {
    window.location.href = "/allProducts.html";
})

allProductsBtn.addEventListener('click', function() {
    window.location.href = "/allProducts.html";
})
