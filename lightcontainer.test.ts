import { cont } from './lightcontainer'
import { LightContainer } from './lightcontainer'

test('destination Honduras and 5000 weight', ()=> { expect(cont).toEqual({destination :'China', cargoWeight: 2000})})

test('destination Bolivia and 2500 weight', ()=> { expect(new LightContainer('Bolivia', 2500)).toEqual({destination :'Bolivia', cargoWeight: 2500})})

test('destination El Salvador and weight is ommitted from the constructor', ()=> { expect(new LightContainer('El Salvador')).toEqual({destination :'El Salvador', cargoWeight: 0})})

test('destination Singapore and weight is 10000', ()=> { expect(new LightContainer('Singapore', 10000)).toEqual({destination :'Singapore', cargoWeight: 10000})})


