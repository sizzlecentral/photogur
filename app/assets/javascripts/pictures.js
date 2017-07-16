document.addEventListener("DOMContentLoaded", function () {

  var addToDeck = document.querySelectorAll('.active-state-trigger');
  addToDeck.forEach(function(button){
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var parentCard = button.parentElement;
      parentCard.classList.add('active');
    });
  });
});
