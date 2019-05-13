class Weapon extends Item{
  constructor(value, weapon){
    value = undefined
    weapon = undefined
    index = 30
  }
  get value(){ return this.value}
  set value(value){ this._value = Utlis.typeCheck(value, "int", "game.item.weapon.value");}

get weapon(){return this.weapon}
set weapon(weapon){ this._weapon = Utils.typeCheck(weapon, "int", "game.item.weapon.armor");}
  }
