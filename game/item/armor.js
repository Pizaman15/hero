class Armor extends Item{
  constructor(value, armor){
    this._value = undefined;
    this._armor = undefined;
    this._index = 20;
  }
  get value(){ return this.value}
  set value(value){ this._value = Utlis.typeCheck(value, "int", "game.item.armor.value");}

  get armor(){ return this.armor}
  set armor(armor){ this._armor = Utils.typeCheck(armor, "int", "game.item.armor.armor");}

  get index(){ return this.index}
  set index(index){ this._index = Utils.typeCheck(index, "int", "game.item.armor.index");}

  toString(){return this.armor}
}
