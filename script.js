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
// creo la classe pet con le sue proprietà
// devo aggiungere un metodo per far si che  petOwners1 === petOwners2 true
const petOwners1 = "gigi";
const petOwners2 = "pippo";

class pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(x) {
    return this.ownerName === x.ownerName;
  }
}

const form = document.querySelector("form");
form.onsubmit = function (event) {
  event.preventDefault();
  const pName = document.getElementById("PetName");
  console.log(pName.value);
};

const petName = document.getElementById("PetName");
const ownerName = document.getElementById("OwnerName");
const species = document.getElementById("Species");
const breed = document.getElementById("Breed");
