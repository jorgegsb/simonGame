import Position from "./position.js";

export default class Board {

    constructor(width, height, colorX, colorY) {
        this.dimension = new Position(width, height);
        this.colorDimension = new Position(colorX, colorY);
    }
}