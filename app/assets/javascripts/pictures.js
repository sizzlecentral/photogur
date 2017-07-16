document.addEventListener("DOMContentLoaded", function () {

  var addToDeck = document.querySelectorAll('.active-state-trigger');
  addToDeck.forEach(function(button){
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var parentCard = button.parentElement;
      if (parentCard.classList.contains('active')) {
        parentCard.classList.remove('active');
      } else {
        parentCard.classList.add('active');
      }
    });
  });
});
