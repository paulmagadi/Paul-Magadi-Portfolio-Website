// Select the navbar element
const navbar = document.querySelector('.navbar');

// Select the menu button element
const menuBtn = document.querySelector('.menu-button');

// Select all anchor links within the navbar
const navbarLinks = document.querySelectorAll('.navbar a');

// Select the header element
const header = document.querySelector('.header');



// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');

  // Check if the 'active' class is present on the navbar
  if (navbar.classList.contains('active')) {
    // Change the inner HTML of the menu button to a close icon
    menuBtn.innerHTML = '<p><span class="material-symbols-outlined">close</span></p>';
    
    // Set the border-bottom style of the header
    header.classList.add('add-border');
    

  } else {
    // Change the inner HTML of the menu button to a menu icon
    menuBtn.innerHTML = '<p><span class="material-symbols-outlined">menu</span></p>';

      // Remove the border-bottom style of the header
      header.classList.remove('add-border');

  }
});


// Loop over each navbar link and add a click event listener
navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');

    // Check if the 'active' class is present on the navbar
    if (navbar.classList.contains('active')) {
      // Change the inner HTML of the menu button to a close icon
      menuBtn.innerHTML = '<p><span class="material-symbols-outlined">close</span></p>';
      
      // Set the border-bottom style of the header
      header.classList.add('add-border');
    } else {
      // Change the inner HTML of the menu button to a menu icon
      menuBtn.innerHTML = '<p><span class="material-symbols-outlined">menu</span></p>';

      // Remove the border-bottom style of the header
      header.classList.remove('add-border');
    }
  });
});
