class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  //1 Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // 2 Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // 3 Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVamp = 0;
    let currentVamp = this;
   
    while (currentVamp.creator) {
    
      currentVamp = currentVamp.creator;
      numOfVamp++;
    }
    return numOfVamp;
  }

  // 4 Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    // Count the number of ancestors in the lineage of each vampire
    let numOfAncestors = 0;
    let currentVamp = this;
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numOfAncestors++;
    }

    let numOfAncestorsOther = 0;
    let otherVamp = vampire;
    while (otherVamp.creator) {
      otherVamp = otherVamp.creator;
      numOfAncestorsOther++;
    }

    // Compare the number of ancestors and return true if the current vampire has fewer
    return numOfAncestors < numOfAncestorsOther;
  }

  /** 5 Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }


  //RECURSIVE FUNCTIONS
  
  // 6  Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (name === this.name) {
      return this;
    }

    for (const offspring of this.offspring) {
      if (offspring.vampireWithName(name)!== null)
      return offspring.vampireWithName(name);
    }
    return null;
  }

  //7 Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDes = 0; 

    for (const offspring of this.offspring) {
      totalDes += offspring.totalDescendents + 1;
    }
    return totalDes;
  }
  

  //8 Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let totalMillenial = [];

    if (this.yearConverted > 1980) {
      totalMillenial.push(this);
    }

    for (const offspring of this.offspring) {
      totalMillenial = totalMillenial.concat(offspring.allMillennialVampires)
        
    }
    return totalMillenial;
  }

 
}

module.exports = Vampire;



