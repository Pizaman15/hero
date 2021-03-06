var ctx = document.getElementById('map');
ctx.innerHTML = "Context defined";

/* Inital conditions and starting map generation.*/
var mapPackage = {name: "The Ultimate Map",
                  size: {width: 75, height: 50},
                  tile: Cell,
                  fill: "#",
                  room: {max:{width: 15, height: 15},
                         min:{width: 5, height: 5}},
                  roomDensity: .2,
                  hallDensity: 1.4}
var blankPackage = {name: "The Blank Map",
                    size: {width: 75, height: 50},
                    tile: Cell,
                    fill: "#",
                    room: {max:{width: 15, height: 15},
                          min:{width: 5, height: 5}},
                    roomDensity: 0,
                    hallDensity: 1.4}
var heroPackage = {image: "@",
                   name: "derf",
                   health: {max:10, current:10},
                   damage: {min:2, max:5}}

var heroState = 1;
var intVar = false;
var invCords = undefined;

  /*
  1 is to move
  2 is to interact
  3 is to attack
*/
  function actkey(e){
    if (!intVar){
      if(e.key == 5){heroState ++;}
        if(heroState > 3){heroState = 1;}
        if(heroState == 2){interactKey(e);console.log("2");}
        if(heroState == 1){logkey(e);console.log("1");}
        if(heroState == 3){combatKeys(e);console.log("3");}
      }
      if(intVar){
      var item = inventoryControl(e);
      if (item !== undefined) {
     dungeon.hero.take(item);
     drawMap();
     console.log(dungeon.hero.inventory);
     }
    }
  }

  function keys(key){
   var cord = dungeon._keyToMove(key);
    if(dungeon.map.cell[cord.y][cord.x].open){
       dungeon.hero.location = cord;
      return true;
     }
    return false;
   }

  function interact(key){
    var cord = dungeon._keyToMove(key);
     return cord;
   }

  function combatKeys(e){
    var occupied = dungeon.map.cell.occupied;
    var invlength = dungeon.map.cell.length;
    if(e.key == "End" || e.key == "1"){
      if(keys("1")) {
        if (occupied == true) {
          dungeon.map.cell[dungeon._keyToMove(key).y][dungeon._keyToMove(key).x].assignDamage(damage);
          inventory.inneraHTML = dungeon.hero.name + "hits for " + damage + "."
        }
        if (occupied == false) {
          inventory.innerHTML = dungeon.hero.name + "attacks the darkness "  + ".";
        }
      }
    }
    if(e.key == "ArrowDown" || e.key == "2"){
      if(keys("2")){
        if (occupied == true) {
          dungeon.map.cell[dungeon._keyToMove(key).y][dungeon._keyToMove(key).x].assignDamage(damage);
          inventory.inneraHTML = dungeon.hero.name + "hits for " + damage + "."
        }
        if (occupied == false) {
          inventory.innerHTML = dungeon.hero.name + "attacks the darkness "  + ".";
        }
      }
    }
    if(e.key == "PageDown" || e.key == "3"){
      if(keys("3")){
        if (occupied == true) {
          dungeon.map.cell[dungeon._keyToMove(key).y][dungeon._keyToMove(key).x].assignDamage(damage);
          inventory.inneraHTML = dungeon.hero.name + "hits for " + damage + "."
        }
        if (occupied == false) {
          inventory.innerHTML = dungeon.hero.name + "attacks the darkness "  + ".";
        }
      }
    }
    if(e.key == "ArrowLeft" || e.key == "4"){
      if(keys("4")){
        if (occupied == true) {
          dungeon.map.cell[dungeon._keyToMove(key).y][dungeon._keyToMove(key).x].assignDamage(damage);
          inventory.inneraHTML = dungeon.hero.name + "hits for " + damage + "."
        }
        if (occupied == false) {
          inventory.innerHTML = dungeon.hero.name + "attacks the darkness "  + ".";
        }
      }
    }
    if(e.key == "ArrowRight" || e.key == "6"){
      if(keys("6")){
        if (occupied == true) {
          dungeon.map.cell[dungeon._keyToMove(key).y][dungeon._keyToMove(key).x].assignDamage(damage);
          inventory.inneraHTML = dungeon.hero.name + "hits for " + damage + "."
        }
        if (occupied == false) {
          inventory.innerHTML = dungeon.hero.name + "attacks the darkness "  + ".";
        }
      }
    }
    if(e.key == "Home" || e.key == "7"){
      if(keys("7")){
        if (occupied == true) {
          dungeon.map.cell[dungeon._keyToMove(key).y][dungeon_.keyToMove(key).x].assignDamage(damage);
          inventory.inneraHTML = dungeon.hero.name + "hits for " + damage + "."
        }
        if (occupied == false) {
          inventory.innerHTML = dungeon.hero.name + "attacks the darkness "  + ".";
        }
      }
    }
    if(e.key == "ArrowUp" || e.key == "8"){
      if(keys("8")){
        if (occupied == true) {
          dungeon.map.cell[dungeon._keyToMove(key).y][dungeon._keyToMove(key).x].assignDamage(damage);
          inventory.inneraHTML = dungeon.hero.name + "hits for " + damage + "."
        }
        if (occupied == false) {
          inventory.innerHTML = dungeon.hero.name + "attacks the darkness "  + ".";
        }
      }
    }
    if(e.key == "PageUp" || e.key == "9"){
      if(keys("9")){
        if (occupied == true) {
          dungeon.map.cell[dungeon._keyToMove(key).y][dungeon._keyToMove(key).x].assignDamage(damage);
          inventory.inneraHTML = dungeon.hero.name + "hits for " + damage + "."
        }
        if (occupied == false) {
          inventory.innerHTML = dungeon.hero.name + "attacks the darkness "  + ".";
        }
      }
    }
  }

 document.addEventListener("keyup", actkey);
  function interactKey(e){
    if(e.key == "End" || e.key == "1"){
      interactStarter(interact("1"));
     drawMap();
    }
    if(e.key == "ArrowDown" || e.key == "2"){
      interactStarter(interact("2"));
     drawMap();
    }
    if(e.key == "PageDown" || e.key == "3"){
      interactStarter(interact("3"));
     drawMap();
    }
    if(e.key == "ArrowLeft" || e.key == "4"){
      interactStarter(interact("4"));
     drawMap();
    }
    if(e.key == "ArrowRight" || e.key == "6"){
      interactStarter(interact("6"));
     drawMap();
    }
    if(e.key == "Home" || e.key == "7"){
      interactStarter(interact("7"));
     drawMap();
    }
    if(e.key == "ArrowUp" || e.key == "8"){
      interactStarter(interact("8"));
     drawMap();
    }
    if(e.key == "PageUp" || e.key == "9"){
      interactStarter(interact("9"));
     drawMap();
    }
  }

document.addEventListener("keyup", actkey);
  function logkey(e){
    if(e.key == "End" || e.key == "1"){
      if(keys("1")) {
        updates.innerHTML = dungeon.hero.name + "moved southwest";
      }else{updates.innerHTML = dungeon.hero.name + " hit a wall";}
        drawMap();
      }
    if(e.key == "ArrowDown" || e.key == "2"){
      if(keys("2")){
        updates.innerHTML = dungeon.hero.name + " moved south";
      }else{updates.innerHTML = dungeon.hero.name + " hit a wall";}
        drawMap();
      }
    if(e.key == "PageDown" || e.key == "3"){
      if(keys("3")){
        updates.innerHTML = dungeon.hero.name + " moved south east";
      }else{updates.innerHTML = dungeon.hero.name + " hit a wall";}
        drawMap();
      }
    if(e.key == "ArrowLeft" || e.key == "4"){
      if(keys("4")){
        updates.innerHTML = dungeon.hero.name + " moved west";
      }else{updates.innerHTML = dungeon.hero.name + " hit a wall";}
        drawMap();
      }
    if(e.key == "ArrowRight" || e.key == "6"){
      if(keys("6")){
        updates.innerHTML = dungeon.hero.name + " moved east";
      }else{updates.innerHTML = dungeon.hero.name + " hit a wall";}
        drawMap();
      }
    if(e.key == "Home" || e.key == "7"){
      if(keys("7")){
        updates.innerHTML = dungeon.hero.name + " moved north west";
      }else{updates.innerHTML = dungeon.hero.name + " hit a wall";}
        drawMap();
      }
    if(e.key == "ArrowUp" || e.key == "8"){
      if(keys("8")){
        updates.innerHTML = dungeon.hero.name + " moved north";
      }else{updates.innerHTML = dungeon.hero.name + " hit a wall";}
        drawMap();
      }
    if(e.key == "PageUp" || e.key == "9"){
      if(keys("9")){
        updates.innerHTML = dungeon.hero.name + " moved north east";
      }else{updates.innerHTML = dungeon.hero.name + " hit a wall";}
        drawMap();
      }
    }

  /*
  List creates a list 1-9 for inventory
  0 is a cancel for it and will be in a
  list format 1-9 + 0 being cancel
*/
  function list(inventory){
    var num = 9;
    var inv = "Inventory <BR><BR>";
   for (var i = 1; i <= num; i++) {
     if(inventory[i] !== undefined){
        inv += i + ". " + inventory[i];
     }
    inv += "<BR>";
   }
   return inv += "0. Cancel";
  }

  /*Makes the inventory when collecting things
  using function list 1-9 and 0 being cancel
*/
  function interactStarter(coordinates){
  coordinates = Utils.typeCheck(coordinates, "obj","interactStarter");
   var stuff = dungeon.map.cell[coordinates.y][coordinates.x].list;
   var text = list(stuff);
     if(stuff.length > 0){
      document.getElementById("inventory").innerHTML = "Loot Bag <br>" + text;
      intVar = true;
      invCords = coordinates;
    }else{
      document.getElementById("inventory").innerHTML = "Inventory is empty";
    }
  }

  function interactEnd(cell, number){
  var replace = cell.list[number];
  return cell.remove(replace);
  }

/*J. make a new function called inventoryControl(key) that does the following:
uses a list from list() to find out what numbers there are in a cell (like 1:
'sword' 2: 'axe' 3: 'Aidan's lack of self respect' means keys 1-3 would do their
 thing) and makes the corresponding keys call interactEnd() for that itemthis
 function should also make 0 a functional key as well. All successful keypresses
  should return false for 0 or the item from interactEnd().*/
  function inventoryControl(key){
    var whitelist = [];
    var cell = dungeon.map.cell[invCords.y][invCords.x];
    var list = cell.list;
    var keyUp = parseInt(key.key);
      for (var i = 1; i <= list.length; i++) {whitelist.push(i);}
      if (keyUp == 0) {
        intVar = false;
        invCords = undefined;
      }
      if (whitelist.includes(keyUp)) {
        intVar = false;
        invCords = undefined;
        return interactEnd(cell, keyUp);
      }
    }
  var dungeon = new Dungeon;
  dungeon.initalizeDungeon(mapPackage);
  ctx.innerHTML = dungeon.displayDungeon();
  /* End of inital conditions. */

  /* drawMap()
  return: none. Simply an event handler to redraw the current map display.
*/
  function drawMap(){
    ctx.innerHTML = dungeon.displayDungeon();

  }
  document.getElementById("drwbtn").onclick = function(){drawMap(); }

  /* newMap(conditions)
  @param conditions: {object} a mapPackage object.
  @return: none.
*/
  function newMap(conditions){
    dungeon.initalizeDungeon(conditions);
    dungeon._initHero(heroPackage);
    dungeon._placeHero();
    ctx.innerHTML = dungeon.displayDungeon();
  }
  document.getElementById("newbtn").onclick = function(){ newMap(mapPackage);}
  document.getElementById("blkmap").onclick = function(){ newMap(blankPackage);}

/*
function addRoom(size, map){
  map._makeRoom(size, Cell, " ", true);
  ctx.innerHTML = blankMap;
}



// button handlers for demo
document.getElementById("rmnbtn").onclick = function(){addRoom({max:10, min:3, area:100}, blankMap)}
*/
