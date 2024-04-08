class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(x) {
    if (this.age > x.age) {
      return this.firstName + " is older than " + x.firstName;
    } else return this.firstName + " is younger than " + x.firstName; //se non metto l'else da undefined
  }
}

const user1 = new User("Mario", "Rossi", 30, "Padova");
const user2 = new User("Giuseppe", "Verdi", 20, "Genova");
const user3 = new User("Pippo", "Baudo", 90, "Bari");
const user4 = new User("Eugenio", "Cacca", 50, "Torino");
console.log(user1);

console.log(user4.compareAge(user1));

/* SECONDO ESERCIZIO */

class pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(vero) {
    return this.ownerName === vero.ownerName;
  }
}

const form = document.querySelector("form");
form.onsubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  console.log(name.value);
};

const petName = document.getElementById("PetName");
const ownerName = document.getElementById("OwnerName");
const species = document.getElementById("Species");
const breed = document.getElementById("Breed");

const newPet = new pet(petName, ownerName, species, breed);

const listItemPet = document.getElementById("listItemPet");
listItemPet.textContent =
  "Pet Name:" +
  newPet.petName +
  "Owner Name:" +
  newPet.ownerName +
  "Species:" +
  newPet.species +
  "Breed:" +
  newPet.breed;
petList.appendChild(listItemPet);
