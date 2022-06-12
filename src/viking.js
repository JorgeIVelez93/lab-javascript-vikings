// Soldier
class Soldier {
  constructor(health, strength)
  {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(dmg) {
    console.log(this.health-=dmg)
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(dmg) {
  this.health-=dmg
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`
    }
    else if (this.health <=0) {
     return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg){
    this.health-=dmg
        if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`
    }
        else if (this.health <=0) {
     return `A Saxon has died in combat`
    }
  }  
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
