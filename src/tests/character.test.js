const Character = require('../components/character');
const characterApiCall = require('./characterApiCall.json');

test('should contain the values passed from the character object', () => {
    let testCharacter = new Character(characterApiCall);
    expect(testCharacter.name).toEqual('Captain America');
    expect(testCharacter.description).toEqual("Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.");
    expect(testCharacter.imageURL).toEqual('http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/portrait_uncanny.jpg');
    expect(testCharacter.characterID).toEqual(1009220);
})