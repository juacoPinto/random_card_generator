/* eslint-disable */

let theDeck = () => {
  let cards = [];
  let suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
  let ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  for (let s of suits) {
    for (let r of ranks) {
      cards.push({ r, s });
    }
  }
  return cards;
};

let randomCard = cards => {
  const random = Math.floor(Math.random() * 51);
  let cardRank = cards[random].r;
  let cardSuit = cards[random].s;
  let suit;
  if (cardSuit === "&spades;") {
    suit = "spades";
  } else if (cardSuit === "&hearts;") {
    suit = "hearts";
  } else if (cardSuit === "&diams;") {
    suit = "diamonds";
  } else {
    suit = "clubs";
  }
  console.log(cardRank);
  const card = document.createElement("div");
  card.classList.add("card", cardSuit, suit);
  card.innerHTML =
    '<span class="card-suit top">' +
    cardSuit +
    "</span>" +
    '<span class="card-value">' +
    cardRank +
    "</span>" +
    '<span class="card-suit bot">' +
    cardSuit +
    "</span>";
  document.body.appendChild(card);
  console.log(card);
};
let cards = theDeck();
console.log(cards);
randomCard(cards);
