document.addEventListener("DOMContentLoaded", function () {

  var addToDeck = document.querySelectorAll('.active-state-trigger');
  var currentDeck = document.querySelector('.current-deck')
  var deckCount = document.querySelector('.deck-count');
  var count = 0;

  addToDeck.forEach(function(button){
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var parentCard = button.parentElement;
      if (parentCard.classList.contains('active')) {
        parentCard.classList.remove('active');
        button.innerText = 'Add to deck';
        currentDeck.removeChild(parentCard);
        count--;
      } else if (count < 5) {
        parentCard.classList.add('active');
        button.innerText = 'Remove from deck';
        currentDeck.appendChild(parentCard);
        count++;
      } else {
        alert('You have reached your maximum number of cards.  Please remove one of your cards from the deck to add a new one.')
      }
      deckCount.innerHTML = count;
    });
  });

});
