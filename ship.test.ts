import { Ship, newShip, newShip2 } from './ship'
import { cont } from './lightcontainer'
import { LightContainer } from './lightcontainer'

let newCntr = new LightContainer('China', 2000);


test('The maxWeight property is set from the constructor parameter', () => {
    expect(newShip.maxWeight).toBe(10000)
})

test('The containers property is set to an empty array in a new Ship instance.', () => {
    expect(newShip2).toEqual({containers: [], maxWeight: 12000})
})

// test('Calling addContainer adds to the containers array property.', () => {
//     expect(newShip2.addContainer(newCntr)).toEqual({ 'containers' : [ {destination: 'China', cargoWeight: 2000 }], maxWeight: 12000})
// })



