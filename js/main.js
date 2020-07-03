var cardList = Array.from(document.querySelectorAll(".card"));

var orderRange = Array.from(Array(cardList.length).keys());

shuffle(orderRange);


// Add Order Css Property To Game Blocks
cardList.forEach((block, index) => {

    // Add CSS Order Property
    block.style.order = orderRange[index];
  
    // Add Click Event
    block.addEventListener('click', function () {
  
      // Trigger The Flip Block Function
      flipBlock(block);
  
    });
  
  });
  
  // Flip Block Function
  function flipBlock(selectedBlock) {
  
    // Add Class is-flipped
    selectedBlock.classList.add('is-flipped');
  
    // Collect All Flipped Cards
    let allFlippedBlocks = cardList.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
  
    // If Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) {
  
  
      // Stop Clicking Function
      stopClicking();
  
      // Check Matched Block Function
      checkTheCard(allFlippedBlocks[0], allFlippedBlocks[1]);
  
    
    }
  
  }




function stopClicking() {
    let cardContainer = document.querySelector(".card-container");
    cardContainer.classList.add("no-clicking");

    setTimeout(() => {
        cardContainer.classList.remove("no-clicking");
    }, 1000);
}

function checkTheCard(firstCard, secondCard) {

    let wrongTries = document.querySelector(".info-container .tries span");

    if(firstCard.dataset.char == secondCard.dataset.char) {
        firstCard.classList.remove("is-flipped");
        secondCard.classList.remove("is-flipped");

        firstCard.classList.add("is-matched");
        secondCard.classList.add("is-matched");

        document.getElementById("success").play();

    } else {
        wrongTries.textContent = parseInt(wrongTries.textContent) + 1;

        setTimeout(() => {
            firstCard.classList.remove("is-flipped");
            secondCard.classList.remove("is-flipped");
        }, 1000);

        document.getElementById("fail").play();

    }
}

function shuffle(array) {
    let current = array.length,
    temp,
    random;
    while(current>0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;

        
    }
}
