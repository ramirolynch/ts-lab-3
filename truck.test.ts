import { Truck, newTruck,newTruck2, newTruck3, addedAustraliaCntr } from './truck'
import { heavycntr, heavycntr2 } from './heavycontainer'

test('The maxWeight property is set from the constructor parameter, the container property is set to null in a new Truck instance', ()=> { expect(new Truck(5000)).toEqual({maxWeight:5000, container:null})})

test('getTotalWeight returns the gross weight of the container when a container is added.', ()=> { expect(newTruck.getTotalWeight()).toEqual(15000)})

test('isOverweight returns false when the total weight is less than maxWeight', ()=> { expect(newTruck2.isOverweight()).toEqual(false)})

test('isOverweight returns true when the total weight is less than maxWeight', ()=> { expect(newTruck.isOverweight()).toEqual(true)})

test('isOverweight returns true when the total weight is equal to maxWeight', ()=> { expect(newTruck3.isOverweight()).toEqual(false)})


    
