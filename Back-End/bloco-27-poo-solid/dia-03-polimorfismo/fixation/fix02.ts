const db: DbCharacter[] = [];

interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

interface IModel {
  createChar(newChar: DbCharacter): void;
  getChar(id: number): DbCharacter[];
  deleteChar(id: number): void;
  updateChar(upChar: DbCharacter): DbCharacter;
};

class LocalDbModel implements IModel {
  createChar(newChar: DbCharacter): void {
  db.push(newChar);    
  }

  getChar(id: number): DbCharacter[] {
    return db.filter((obj) => obj.id === id);
  }

  deleteChar(id: number): void {
    db.filter((obj) => obj.id !== id);
  }

  updateChar(upChar: DbCharacter): DbCharacter {
    const objToChange = db.find((obj) => obj.id === upChar.id);
    objToChange.name = upChar.name;
    objToChange.specialMove = upChar.specialMove;
    db.splice(db[upChar.name], 1, objToChange);
    return objToChange;
  }
};

class CharacterService {
  constructor(readonly model: IModel) {}
  getChar(id: number): DbCharacter[] {
    const CHAR = this.model.getChar(id);
    return CHAR;    
    }

  createChar(newChar: DbCharacter): number {
    this.model.updateChar(newChar);
    return 201;    
    }

  deleteChar(id: number): number {
    this.model.deleteChar(id);
    return 200;
  }

  updateChar(upChar: DbCharacter): DbCharacter {
    const objUpdated = this.model.updateChar(upChar);
    return objUpdated;
  }
}


