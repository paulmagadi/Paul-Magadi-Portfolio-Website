const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-button');
const navbarLinks = document.querySelectorAll('.navbar a');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');

  if (navbar.classList.contains('active')){
    menuBtn.innerHTML = '<p><span class="material-symbols-outlined">close</span></p>';
  }
  else {
    menuBtn.innerHTML = '<p><span class="material-symbols-outlined">menu</span></p>';
  }
});

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

