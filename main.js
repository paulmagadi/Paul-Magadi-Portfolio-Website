
function myFunction() {
  var x = document.getElementById(".navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// btn = document.querySelector('.logo');
// item = document.querySelector('.menu-button');

// btn.addEventListener('click', function() {
//   item.innerHTML = '<span class="material-symbols-outlined">close</span>'
// })