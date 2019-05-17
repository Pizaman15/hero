//damage={min,max}
class Monster extends Item{
  constructor(image, name, health, damage, behavior){
    super(image, name, "monster", 100)
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
<<<<<<< HEAD
  get attack(){return this._damage = {
    min:this.damage.min,
    max:this.damage.max}}
=======
  get attack(){this._attack = {min:this.damage.min, max:this.damage.max};
    return this._attack
  }
>>>>>>> 7744d2cfac15518798208e30785432053bcbe7df
}
