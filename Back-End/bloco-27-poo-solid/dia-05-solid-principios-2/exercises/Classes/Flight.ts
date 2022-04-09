import Passenger from './Passenger';
import ShippedItem from './ShippedItem';

class Flight {
  constructor (public num:number, public payload:(Passenger | ShippedItem)[]) { }

  Add(newPayload:Passenger | ShippedItem): void {
    this.payload.push(newPayload); 
  }

  Remove(removePayload: Passenger | ShippedItem): void {
    const index = this.payload.indexOf(removePayload, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
};

export default Flight;