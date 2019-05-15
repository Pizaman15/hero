class Weapon extends Item{
  constructor(value, weapon){
    value = undefined
    weapon = undefined
    index = 30
    attack = Utils.randomNumber(undefined, undefined);
  }
  get value(){ return this.value}
  set value(value){ this._value = Utlis.typeCheck(value, "int", "game.item.weapon.value");}

get weapon(){return this.weapon}
set weapon(weapon){ this._weapon = Utils.typeCheck(weapon, "int", "game.item.weapon.armor");}


  get index(){ return this.index}
  set index(index){ this._index = Utils.typeCheck(index, "int", "game.item.weapon.index");}

get attack(){return this.attack}
set attack(attack){this._attack = Utils.typeCheck(attack, "int", "game.item.weapon.attack");}
  toString(){return this._attack}

  }
