const characterApiCall = require('./characterApiCall.json');
const comicsApiCall = require('./comicsApiCall.json');
var myFunctions = require('../components/apiFetch')
const Character = require('../components/character');
const Comics = require('../components/comics');

describe("getCharacter", () => {
    test("tests output of getCharacter to be the same as a new character instance with the correct api call", async () => {
        let testCharacter = new Character(characterApiCall);
        let testCharacter2 = await myFunctions.getCharacter("Captain%20America");
        expect(testCharacter2.name).toEqual(testCharacter.name);
    })
})