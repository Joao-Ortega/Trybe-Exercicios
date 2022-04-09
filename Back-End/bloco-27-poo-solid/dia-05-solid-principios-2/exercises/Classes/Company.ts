import Flight from './Flight';
import Passenger from './Passenger';
import ShippedItem from './ShippedItem';

class Company {
  constructor (public nome:string, public flights:Flight[]) { }
  NewFlight(flightNum: number): void{
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }
  AddToFlight(flightNum: number, payload: Passenger | ShippedItem): void { }
  RemoveFromFlight(flightNum: number, passenger: Passenger | ShippedItem): void { }
};

export default Company;