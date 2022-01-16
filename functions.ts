import { ShippingContainer } from "./shippingcont"
import { newHeavyCont } from "./ship";
import { newLightCont } from "./ship";
import {cont} from './lightcontainer';
import { Transporter } from "./transporter";
import { newShip } from "./ship";
import { newTruck } from './truck'
import { Ship } from './ship'


export function findContainersByDestination (containers:ShippingContainer[], destination:string): ShippingContainer[] {


    return containers.filter(x=>x.destination === destination);

}


let contArr = [cont, newHeavyCont, newLightCont]

//console.log(findContainersByDestination(contArr,'Peru'))

let transArr = [newTruck, newShip]

function findOverWeightTransporters(transporters:Transporter[]): Transporter[] {

    return transporters.filter(x=>x.isOverweight() === true)

}

console.log(findOverWeightTransporters(transArr))

function isSafeToAddContainer(ship:Ship, container:ShippingContainer): boolean{

    return ship.getTotalWeight() + container.getGrossWeight() <= ship.maxWeight;
}

console.log(isSafeToAddContainer(newShip, newHeavyCont))




