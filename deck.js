export default class Deck{
    constructor(slaveOrEmp){
        var cards = decks(slaveOrEmp);
        this.cards = cards;
        return cards;
    }
}


class Card{
    constructor(type){
        this.type = type;
    }

    getHTML() {
        const cardDIV = document.createElement('div');
        cardDIV.innerText = this.type;
        cardDIV.classList.add("card");
        cardDIV.onclick();
        return cardDIV;
    }

}

function decks(slaveOrEmp){
    var cardS = new Card("Slave2"), cardP = new Card("Citizen"), cardE = new Card("Emperor2");
    var deckS = [cardP, cardP, cardS, cardP, cardP];
    var deckE = [cardP, cardP, cardE, cardP, cardP];
    if (slaveOrEmp === "Slave2"){
        return deckS;
    } else {
        return deckE;
    }
    
}
