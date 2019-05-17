//damage={min,max}
class Monster extends Item{
  constructor(image, name, health, damage, behavior){
    super(image, name, type, 100)
    this._health = Utils.typeCheck(health, "int", "Monster constructor (health)");
    this._damage = Utils.typeCheck(damage, "obj", "Monster constructor (damage)");
    this._behavior = Utils.typeCheck(behavior, "str", "Monster constructor (behavior)");
    this._inventory = [];
  }
  get health(){return this._health;}
  set health(health){
    this._health = Utils.typeCheck(health, "int", "item.monster.health");
  }
  get damage(){return this._damage;}
  set damage(damage){
    this._damage = Utils.typeCheck(damage, "obj", "item.monster.damage");
  }
  get behavior(){return this._behavior;}
  set behavior(behavior){
    this._behavior = Utils.typeCheck(behavior, "str", "item.monster.behavior");
  }
  get attack(){return this._damage = {min:this.damage.min, max:this.damage.max};}
}
