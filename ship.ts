import { Transporter } from './transporter'
import { ShippingContainer} from './shippingcont'
import { LightContainer } from './lightcontainer'
import { HeavyContainer } from './heavycontainer'
import { cont } from './lightcontainer'

export class Ship implements Transporter {
    maxWeight:number;
    containers:ShippingContainer[] = [];
    constructor(maxWeight:number) {
        this.maxWeight = maxWeight;
    };
    addContainer(container: ShippingContainer): void {
        this.containers.push(container);
    };
    getTotalWeight(): number {
        let total = 0;
        if (this.containers.length === 0) {
            return total;
        } else {
        for (let cont of this.containers ) {
            
            total += cont.getGrossWeight()
        }
        return total;
        }   
    };
    isOverweight(): boolean {
        return this.getTotalWeight() > this.maxWeight; 
    };
}

export let newShip = new Ship(10000)
export let newLightCont = new LightContainer('Peru', 1000)
export let newHeavyCont = new HeavyContainer(2000, 'Chile')
export let newHeavyCont2 = new HeavyContainer(6000, 'Paraguay')
export let newHeavyCont3 = new HeavyContainer(6000, 'Bolivia')


newShip.addContainer(newLightCont)
//newShip.addContainer(newHeavyCont)

console.log(newShip.getTotalWeight())

console.log(newShip.isOverweight())

//newShip.addContainer(newHeavyCont)
//newShip.addContainer(newHeavyCont)
//newShip.addContainer(newHeavyCont)

console.log(newShip.isOverweight())

export let newShip2 = new Ship(12000)

// export let contAdd = newShip2.addContainer(cont)

// console.log(newShip2)

export let newShip3 = new Ship(5000)
newShip3.addContainer(newHeavyCont2)

export let newShip4 = new Ship(6000)
newShip4.addContainer(newHeavyCont3)


