import Company from "./Company";
import ShippedItem from "./ShippedItem";
import Passenger from "./Passenger";
import Flight from "./Flight";

class ShippingCompany extends Company {
  NewFlight(flightNum: number): void{
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }
  AddToFlight(flightNum:number, item: ShippedItem | Passenger): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
  }
};

export default ShippingCompany;