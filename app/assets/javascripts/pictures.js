document.addEventListener("DOMContentLoaded", function () {

  var addToDeck = document.querySelectorAll('.active-state-trigger');
  var deckCount = document.querySelector('.deck-count');
  var count = 0;

  addToDeck.forEach(function(button){
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var parentCard = button.parentElement;
      if (parentCard.classList.contains('active')) {
        parentCard.classList.remove('active');
        count--;
      } else {
        parentCard.classList.add('active');
        count++;
      }
      deckCount.innerHTML = count;
    });
  });

});
