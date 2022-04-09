import { Item } from './interfaces/OrderInter';

class Order {
  private _client: string;
  private _consumedItems: Item[];
  private _payment: string;
  private _sale?: number;

  constructor(client: string, consumedItems: Item[], payment: string, sale?: number) {
    this._client = client;
    this._consumedItems = consumedItems;
    this._payment = payment;
    this._sale = sale;
  }

  get client(): string {
    return this._client;
  }

  get consumedItems(): string {
    return this._consumedItems.filter((itms) => itms.orderName)[0].orderName;
  }

  sumItemsConsumed(): number {
    const sum = this._consumedItems.reduce((acc, el) => acc + el.price, 0);
    return sum;
  }

  withDiscount(disc: number): string {
    this._sale = disc / 100;
    const discount = this.sumItemsConsumed() - (this.sumItemsConsumed() * this._sale);
    return `Seu desconto foi ${this._sale}, agora seu total é ${discount}`;
  }
};

const pedido = new Order('ortega', [{ orderName: 'açaí', price: 20 }, { orderName: 'milkshake', price: 15 }], 'débito', 20);

console.log(`O cliente se chama ${pedido.client}`);
console.log(`O seu primeiro pedido foi ${pedido.consumedItems}`);
console.log(`O total do pedido foi ${pedido.sumItemsConsumed()}`);
console.log(`Mas com desconto de 30% ficou ${pedido.withDiscount(30)}`);
// npx tsc -target es6 exercise03/Order.ts exercise03/Client.ts exercise03/ItemOrder.ts