class Ship {
    hits = 0;
    coords = [];

    constructor(name, length) {
        this.name = name;
        this.length = length;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        return this.hits === this.length ? true : false;
    }

    addCoords(row, column) {
        this.coords.push(`${row},${column}`);
    }
}

export default Ship;