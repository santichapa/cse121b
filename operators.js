let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
    // should return true if a randomly generated number is greater than .5, false if it is less than .5
    let num = Math.random();
    let hit = false;
    if (num > 0.5) {
        hit = true;
    }
    return hit;
}

function shipCanFire() {
    // return true if the ships health is above 0 AND ammo is above 0 false otherwise
    let shipCanFire = false;
    if (shipHealth > 0 && shipAmmo > 0) {
        shipCanFire = true;
    }
    return shipCanFire;
}

function isDestroyed(health) {
    // return true if health is zero or less
    let isDestroyed = false;
    if (health <= 0) {
        isDestroyed = true;
    }
    return isDestroyed;
}

function reloadShip() {
    // reduce ship health by 1 and increase ammo by 3
    shipHealth -= 1;
    shipAmmo += 3;
}


// let firstName = 'Antonia';
// let lastName = 'Francesca';

// const fullName = (first, last) => `${first} ${last}`;

// document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);

// let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

// let namesB = names.filter((name) => name[0] == "B");

// let namesLength = names.map((name) => name.length);

// let initialValue = 0;

// let namesAvg = names.reduce((total, name) => total + name.length, 0) / names.length;

// console.log(namesAvg);