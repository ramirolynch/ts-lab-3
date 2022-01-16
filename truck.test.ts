import { Truck, newTruck, addedAustraliaCntr } from './truck'
import { heavycntr, heavycntr2 } from './heavycontainer'

test('The maxWeight property is set from the constructor parameter, the container property is set to null in a new Truck instance', ()=> { expect(new Truck(5000)).toEqual({maxWeight:5000, container:null})})


test('Calling addContainer sets the container property', ()=> { expect(newTruck.addContainer(heavycntr2)).toEqual({maxWeight:3000
    , container:{ tareWeight: 1000, destination: 'India', cargoWeight: 14000 }})})

