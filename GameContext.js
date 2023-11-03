export default class GameContext {
    constructor(team, state, clue, numberOfWords, wildCard, cardInstance) {
        this.activeTeam = team;
        this.gameState = state; //orange decipherer, orange agent, puprle decipherer, purple agent
        this.clue = clue;
        this.numberOfWords = numberOfWords;
        this.wildCardList = wildCard;
        this.cardInstancesArr = cardInstance

    }

    setActiveTeam(team) {
        this.activeTeam = team;
        //maybe set property whoseTurn on the team object??
    }

    getActiveTeam() {
        return this.activeTeam;
    }

    setgameState(state) {
        this.gameState = state;
    }

    getgameState() {
        return this.gameState;
    }

    setClue(word) {
        this.clue = word;
    }

    getClue() {
        return this.clue;
    }

    setNumberOfWords(degree) {
        this.numberOfWords = degree;
    }

    getNumberOfWords() {
        return this.numberOfWords;
    }

    setWildCardList(wildCard) {
        this.wildCardList = wildCard;
    }

    getWildCardList() {
        return this.wildCardList;
    }

    appendWildCardList(wildCard) {
        this.wildCardList.push(wildCard);
    }

    setCardInstancesArr(cardInstance) {
        this.cardInstancesArr = cardInstance;
    }

    getCardInstancesArr() {
        return this.cardInstancesArr;
    }

    appendCardInstancesArr(cardInstance) {
        this.cardInstancesArr.push(cardInstance);
    }
}