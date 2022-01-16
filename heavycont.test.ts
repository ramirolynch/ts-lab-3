import { HeavyContainer, heavycntr, heavycntr2 } from './heavycontainer'

test('The tareWeight, destination, and cargoWeight properties are set from the constructor parameters.', ()=> { expect(new HeavyContainer(1000,'New Zealand', 500)).toEqual({tareWeight :1000, destination:'New Zealand', cargoWeight: 500})})

test('cargoWeight defaults to 0, when the third constructor parameter is omitted.', ()=> { expect(new HeavyContainer(1000,'New Zealand')).toEqual({tareWeight :1000, destination:'New Zealand', cargoWeight: 0})})

test('getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)', ()=> { expect(heavycntr.getGrossWeight()).toEqual(4000)})

test('getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)', ()=> { expect(heavycntr2.getGrossWeight()).toEqual(15000)})

