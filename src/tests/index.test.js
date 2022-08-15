// let  testFunctions  = require('./index.js');
const Character = require('../components/character');
const characterApiCall = require('./characterApiCall');

test('should read properly from api call', () => {   
    expect(characterApiCall['data']['results'][0]['name']).toEqual('Captain America');
    expect(characterApiCall['data']['results'][0]['description']).toEqual("Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.");
    expect(characterApiCall['data']['results'][0]['thumbnail']['path']).toEqual("http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087");
    expect(characterApiCall['data']['results'][0]['id']).toEqual(1009220);
})



