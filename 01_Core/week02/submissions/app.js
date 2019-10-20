

// droptown menu

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // name sort

  // 1. collect input

  let btn = document.getElementById('sort-btn');
  let resultsDiv = document.getElementById('results');

  let users = [];

  function User(first, last) {
      this.firstName = first;
      this.lastName = last;
  };

  btn.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Button Clicked');

      // 2. separate out each full name

      let fullNames;

      fullNames = document.getElementById('user-input').value.split(', ');
        //   console.log(names);
        fullNames.forEach(pushResults);

        function pushResults(item, index, array) {
            
            let fullName, firstName, lastName;

            // 3. separate first name and last name
            fullName = item.split(' ');

            // assign each to its own variable
            firstName = fullName[0];
            lastName = fullName[1];

            // store the last names as a new object in the array
            let newUser = new User(firstName, lastName);
            users.push(newUser);
        };

        // 4. Organize last names alphabetically 
        users.sort(function(a, b) {

            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()
            ) return -1;

            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()
            ) return 1;

            return 0;
        });
  })

  // 5. Print names to screen via a list and style last names bold and red

  