import Ship from '../Ship';

let ship;

beforeEach(() => {
    ship = new Ship('Cruiser', 3);
}) 

test('creates ship', () => {
    expect(ship).toEqual({name: 'Cruiser', length: 3, hits: 0});
})

test('ship takes one hit', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
})

test('ship not sunk', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
})

test('ship to be sunk', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})