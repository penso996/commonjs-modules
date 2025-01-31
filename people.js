const fullName = require("./names");
const hobbies = require("./hobbies");

function person() {
    const getName = fullName("Andrea", "Penso");
    const getHobbies = hobbies("Videogames", "MTB", "Books");

    return {
        getName,
        getHobbies
    };
}

module.exports = person;