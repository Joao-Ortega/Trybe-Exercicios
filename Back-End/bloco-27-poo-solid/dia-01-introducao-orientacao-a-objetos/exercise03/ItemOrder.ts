class ItemOrder {
  private _orderName: string[];
  private _price: number;

  constructor(orderName: string[], price: number) {
    this._orderName = orderName;
    this._price = price;
  }
};

export default ItemOrder;