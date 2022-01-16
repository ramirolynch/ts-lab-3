import { ShippingContainer } from "./shippingcont";

export class HeavyContainer implements ShippingContainer {
    tareWeight = 0;
    destination = '';
    cargoWeight = 0;
    constructor(tareWeight:number, destination:string, cargoWeight = 0) {
        this.tareWeight = tareWeight;
        this.destination = destination;
        this.cargoWeight = cargoWeight;
    }
    getGrossWeight(): number {
        return this.tareWeight + this.cargoWeight;
    }

}

export let heavycntr = new HeavyContainer(1000, 'Australia', 3000)
export let heavycntr2 = new HeavyContainer(1000, 'India', 14000)

console.log(heavycntr.getGrossWeight())