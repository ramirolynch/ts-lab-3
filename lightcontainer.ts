import { ShippingContainer } from "./shippingcont";


export class LightContainer implements ShippingContainer {
    destination = '';
    cargoWeight;
    constructor(destination:string, cargoWeight:number=0) {
        this.destination = destination;
        this.cargoWeight = cargoWeight;
    }
    getGrossWeight(): number {
        return this.cargoWeight;    

    }
}

export let cont = new LightContainer('China', 2000)

