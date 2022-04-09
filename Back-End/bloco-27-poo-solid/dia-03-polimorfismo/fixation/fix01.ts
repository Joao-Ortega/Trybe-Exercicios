// abstract class Character {
//   abstract talk(): void;
//   abstract specialMove(): void;
// };

// class MeleeCharacter extends Character {

//   constructor(private _name: string) {
//     super();
//   };

//   talk(): void {
//     console.log(`${this._name} está falando`);
//   }

//   specialMove(): void {
//     console.log(`${this._name} ataca com faca`);
//   }
// }

// class LongRangeCharacter extends Character {
//   constructor(private _name: string) {
//     super();
//   };

//   talk(): void {
//     console.log(`${this._name} está alcançando longe`);
//   }

//   specialMove(): void {
//     console.log(`${this._name} ataca de MUITO LONGE`);
//   }
// };

// const func = (sup: Character): void => {
//   sup.talk();
//   sup.specialMove();
// };

// const melee = new MeleeCharacter('Ortega');
// const long = new LongRangeCharacter('Hyo');

// console.log(func(melee));
// console.log(func(long));
