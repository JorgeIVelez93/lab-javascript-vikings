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
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(newViking){
    this.vikingArmy.push(newViking)
 } 
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon)
  }
  vikingAttack() {
  let randomViking = Math.floor(Math.random()*this.vikingArmy.length)
    
  let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    
   let vik = this.vikingArmy[randomViking];

   let sax = this.saxonArmy[randomSaxon];
  let battleMessage = sax.receiveDamage(vik.attack());
    
    if (sax.health <= 0) {
      this.saxonArmy.splice(randomSaxon,1)
    }
    return battleMessage  
    } 
    saxonAttack() {
      let randomViking = Math.floor(Math.random()*this.vikingArmy.length)
        
      let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        
       let vik = this.vikingArmy[randomViking];
    
       let sax = this.saxonArmy[randomSaxon];
      let battleMessage = vik.receiveDamage(sax.attack());
        
        if (vik.health <= 0) {
          this.vikingArmy.splice(randomViking,1)
        }
        return battleMessage  
        } 
showStatus () {
  if (this.saxonArmy.length === 0) {
    return  `Vikings have won the war of the century!`
  } else if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survived another day...`
  } else {return `Vikings and Saxons are still in the thick of battle.`}
}
  }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
