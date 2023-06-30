// const story = document.body.querySelector(".story")

// const setText = document.body.querySelector("#set-text");
// setText.addEventListener("click", () => {
//     story.textContent = "Start typing your story here...";
// })

// const clearText = document.body.querySelector("#clear-text");
// clearText.addEventListener("click", () => {
//     story.textContent = "";
// })



function addName(event) {
    event.preventDefault();
}

var button = $('button');

button.on("click", getNameAndLogToConsole);

function getNameAndLogToConsole() {
  var name = $('.name-input').val();
  console.log(name);
  // code to actually present a message to user goes here
}






let friends = [
    {
        name: "Bree",
        age: 23,
        favoriteSong: "Flashing Lights by Kanye West",
        favoriteFood: "Buddha Bowls"
    },
    {
        name: "Lee",
        age: 22,
        favoriteSong: "Flowers by Miley Cyrus",
        favoriteFood: "Corn on the Cob"
    }

]

const person = {
    name: "",
    age: 0,
    favoriteSong: null,
    favoriteFood: null
}

friends[1].country = "USA";
console.log(friends[1]);

friends[1].favoriteFood = "Cake Pops";

console.log();

// alert( personA.name )

// friends[1].forEach(function(item) {
//     if (isNaN(item)) {
//         console.log(item);
//     }
// });

for (let key in friends[1]) {
    if (isNaN(friends[1][key])) {
        console.log(friends[1][key]);
    }
}

var beverageDetails = [
    {name: "water", size: "medium"}, 
    {name: "coffee", size: "large"}, 
    {name: "latte", size: "small"},
    {name: "la croix", size: "n/a"}
  ];
  
  // without hard-coding the words "coffee" or "large", but by using the beverageDetails variable, print out the sentence:
  
  // "May I have a large coffee, to-go, please?"
  console.log("May I have a " + beverageDetails[1].size + " " + beverageDetails[1].name + ", to-go, please?");