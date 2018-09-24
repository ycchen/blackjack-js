import Card from "./Card";

class Shoe {

  static shuffleSpecs: number[][] = [
    [95, 8],
    [92, 7],
    [89, 6],
    [86, 5],
    [84, 4],
    [82, 3],
    [81, 2],
    [80, 1]
  ];

  numDecks: number = 1;
  cards: Card[] = [];

  constructor(numDecks: number) {
    this.numDecks = numDecks;

    this.newRegular = this.newRegular.bind(this);
  }

  needToShuffle(): boolean {
    if (this.cards.length == 0) {
      return true;
    }

    const totalCards = this.numDecks * 52;
    const cardsDealt = totalCards - this.cards.length;
    const used = (cardsDealt / totalCards) * 100.0;

    for(let x = 0; x < 8; x++) {
      if (used > Shoe.shuffleSpecs[x][0] && this.numDecks == Shoe.shuffleSpecs[x][1]) {
        return true;
      }
    }

    return false;
  }

  shuffleArray(cards: Card[]) {
    let currentIndex = cards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }

    return cards;
  }

  shuffle(): void {
    for(let i = 0; i < 7; i++) {
      this.cards = this.shuffleArray(this.cards);
    }
  }

  newRegular(): void {
    this.cards = [];

    for(let deck = 0; deck < this.numDecks; deck++) {
      for(let suitValue = 0; suitValue < 4; suitValue++) {
        for(let value = 0; value < 13; value++) {
          this.cards.push(new Card({value, suitValue}));
        }
      }
    }

    this.shuffle();
  }

  newEights(): void {
    this.cards = [];

    for(let deck = 0; deck < this.numDecks * 5; deck++) {
      for(let suitValue = 0; suitValue < 4; suitValue++) {
        this.cards.push(new Card({value: 7, suitValue}));
      }
    }

    this.shuffle();
  }

  newSevens(): void {
    this.cards = [];

    for(let deck = 0; deck < this.numDecks * 5; deck++) {
      for(let suitValue = 0; suitValue < 4; suitValue++) {
        this.cards.push(new Card({value: 6, suitValue}));
      }
    }

    this.shuffle();
  }

  newAces(): void {
    this.cards = [];

    for(let deck = 0; deck < this.numDecks * 5; deck++) {
      for(let suitValue = 0; suitValue < 4; suitValue++) {
        this.cards.push(new Card({value: 0, suitValue}));
      }
    }

    this.shuffle();
  }

  newJacks(): void {
    this.cards = [];

    for(let deck = 0; deck < this.numDecks * 5; deck++) {
      for(let suitValue = 0; suitValue < 4; suitValue++) {
        this.cards.push(new Card({value: 10, suitValue}));
      }
    }

    this.shuffle();
  }

  newAcesJacks(): void {
    this.cards = [];

    for(let deck = 0; deck < this.numDecks * 5; deck++) {
      for(let suitValue = 0; suitValue < 4; suitValue++) {
        this.cards.push(new Card({value: 0, suitValue}));
        this.cards.push(new Card({value: 10, suitValue}));
      }
    }

    this.shuffle();
  }

  getNextCard(): Card {
    return this.cards.pop();
  }
}

export default Shoe;
