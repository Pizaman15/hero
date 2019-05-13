class Coin extends Item{
  constructor(value){
    this._value = undefined;
    this._index = 1;
    this._name = "coin";
  }
  get value(){return this.value}
  set value(value){this._value = Utils.typeCheck(value, "int", "game.item.coin.value");}

  get index(){return this.index}
  set index(index){this.index = Utils.typeCheck(index, "int", "game.item.coin.index");}

  get name(){return this.name}
  set name(name){
      if(this.index > 1){this._name = "coins"};
    this._name = this.name;
  }
 toString(){return this.name}
}
