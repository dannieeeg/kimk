



  
document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'kimoji1',
        img: 'images/mem1.png'
      },
      {
        name: 'kimoji2',
        img: 'images/mem3.jpg'
      },
      {
        name: 'kimoji3',
        img: 'images/mem5.jpg'
      },
      {
        name: 'kimoji4',
        img: 'images/mem6.jpg'
      },
      {
        name: 'kimoji1',
        img: 'images/mem1.png'
      },
      {
        name: 'kimoji2',
        img: 'images/mem3.jpg'
      },
      {
        name: 'kimoji3',
        img: 'images/mem5.jpg'
      },
      {
        name: 'kimoji4',
        img: 'images/mem6.jpg'
      
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#resultS')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //THIS IS THE BOARD
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/memcover.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //THIS IS TO CHECK FOR THE CARD MATCHES. >=2
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/memcover.png')
        cards[optionTwoId].setAttribute('src', 'images/memcover.png')
        alert('Kim, You clicked this already!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Kim, You Did It!')
        cards[optionOneId].setAttribute('src', 'images/memblank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/memblank.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/memcover.png')
        cards[optionTwoId].setAttribute('src', 'images/memcover.png')
        alert('Sorry, Not Sorry')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations, Kim!'
      }
    }
  
    //flipping the card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })