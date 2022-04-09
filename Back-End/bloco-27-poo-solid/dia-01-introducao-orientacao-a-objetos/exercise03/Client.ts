class Client {
  constructor(private _name: string) {
    this._name = _name;
  }

  get name(): string {
    return this._name;
  }
};

export default Client;