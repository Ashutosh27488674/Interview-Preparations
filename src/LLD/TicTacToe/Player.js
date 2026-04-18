class Player{
    name;
    playingPiece;
    constructor(name, playingPiece) {
        this.name = name;
        this.playingPiece = playingPiece;
    }

    getName() {
        return this.name;
    }

    getPlayingPiece() {
        return this.playingPiece;
    }

    setPlayingPiece(playingPiece) {
        this.playingPiece = playingPiece;
    }
}

module.exports = Player;