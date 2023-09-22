const nomes = ["john", "lennon", "felipe", "maria", "natalia", "andre", "arcelino"];

console.log(nomes);

// Filter
const filteredList = nomes.filter(function (currentElement) {
  return currentElement.charAt(0) === "j" || currentElement.charAt(0) === "m";
});

console.log(filteredList);

// map
const mappedList = nomes.map(function (currentElement) {
  return currentElement + "@hotmail.com";
});

console.log(mappedList);

// ForEach
const myCollection = [];
nomes.forEach(function (currentElement) {
    myCollection.push( currentElement + "@foreach.com");
});

console.log(myCollection);


console.log(
    // pipeline
    nomes
    .filter(function(currentElement){
        return currentElement.charAt(0) == "a"
    })
    .map(function(currentElement){
        return currentElement.charAt(0)+ currentElement;
    })
    .map(function(currentElement){
        return currentElement+ "@foo.bar";
    })
)


// Every

const isValid = nomes.every(function(currentElement){
    return currentElement.length >= 4;
});

console.log("Every: " + isValid);

// Some


const isValidSome = nomes.some(function(currentElement){
    return currentElement.length < 4;
});

console.log("Some: " + isValid);

// Includes 
const isValidIncludes = nomes.includes("john");

console.log("Includes: " + isValidIncludes);