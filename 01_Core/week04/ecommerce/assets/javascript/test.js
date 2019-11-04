console.log('JS file linked.');

const btn = document.getElementById('submit');

const userName = document.getElementById('customer_name').value;
const userPhone = document.getElementById('phone_number').value;
const userEmail = document.getElementById('email_address').value;

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// validate name

// validate phone

//  validate email

function validateemail() {  

var atposition = userEmail.indexOf('@');  
var dotposition = userEmail.lastIndexOf('.');  

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= userEmail.length) {

        alert('Please enter a valid e-mail address');
        event.preventDefault();
        return false;

    }
}  

btn.addEventListener('click', function(event) {


    // check name for illegal characters
    // check phone for numbers only
    // check phone for 10 digits

    let atposition = userEmail.indexOf('@');  
    let dotposition = userEmail.lastIndexOf('.');  

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= userEmail.length) {

        alert('Please enter a valid e-mail address');
        event.preventDefault();
        return false;

    }

    
});