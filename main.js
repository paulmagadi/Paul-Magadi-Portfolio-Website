const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-button');
const navbarLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');

  // Check if the 'active' class is present on the navbar
  if (navbar.classList.contains('active')) {
    // Change the inner HTML of the menu button to a close icon
    menuBtn.innerHTML = '<p><span class="material-symbols-outlined">close</span></p>';
    
    // Set the border-bottom style of the .header
    header.style.borderBottom = '0.5px solid var(--gray-color)';

    // Set the border-radius style of the .header
    header.style.borderRadius = '10px';

  } else {
    // Change the inner HTML of the menu button to a menu icon
    menuBtn.innerHTML = '<p><span class="material-symbols-outlined">menu</span></p>';

    // Set the border-bottom style of the .header to none
    header.style.borderBottom = 'none';

    // Set the border-radius style of the .header to none
    header.style.borderRadius = 'none';
  }
});


// Loop over each navbar link and toggle active class on click event
navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')){
      menuBtn.innerHTML = '<p><span class="material-symbols-outlined">close</span></p>';
    }
    else {
      menuBtn.innerHTML = '<p><span class="material-symbols-outlined">menu</span></p>';
    }
  });
});

