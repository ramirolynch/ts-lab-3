import { Transporter } from './transporter'
import { ShippingContainer} from './shippingcont'
import {heavycntr, heavycntr2, heavycntr3} from './heavycontainer'


export class Truck implements Transporter {
    maxWeight:number;
    container:ShippingContainer | null = null;
    constructor(maxWeight:number) {
        this.maxWeight = maxWeight;
    }
    addContainer(container:ShippingContainer):void{
        this.container = container;
    };
    
    getTotalWeight():number{
        if (this.container === null) {
            return 0;
        }
        else {
            return this.container.getGrossWeight()
        }
    
    }
    isOverweight(): boolean {
        return this.getTotalWeight() > this.maxWeight; 
    }

}

export let newTruck2 = new Truck(20000)
newTruck2.addContainer(heavycntr2)

export let newTruck3 = new Truck(14000)
newTruck3.addContainer(heavycntr3)

console.log(newTruck3.getTotalWeight())

export let newTruck = new Truck(3000)


export let addedIndiaCntr = newTruck.addContainer(heavycntr2)

console.log(addedIndiaCntr)


export let addedAustraliaCntr = newTruck.addContainer(heavycntr)

console.log(addedAustraliaCntr)

newTruck.addContainer(heavycntr2)
console.log(newTruck)

