const fetch = require('node-fetch');
const getApiHash = require('marvel-api-hash-generator').getApiHash;
const Character = require('./character');
const Comics = require('./comics');

const timeStamp = Date.now();
const privateKey = '07fc721ea9a1069019e21eda9504d830177110df';
const publicKey = '489d289854fbfcb356ded93a89e0451d';
const hashValue = getApiHash(timeStamp, privateKey, publicKey);

const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters';


const getCharacter = (characterName) => {
    let currentCharacter = {};

    const charactersURL = `${requestConstantCharacters}?name=${characterName}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=99`;

    return fetch(charactersURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            currentCharacter = new Character(data);
            return currentCharacter;
        })
        .catch((e) => {
            console.log(e);
            alert('character not found');
        })
}


const getComics = (testCharacterID) => {
    const requestConstantComics = 'http://gateway.marvel.com/v1/public/characters/';
    const comicsURL = `${requestConstantComics}${testCharacterID}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=100`;
    return fetch(comicsURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let comics = new Comics(data);
            return comics.getListOfComics();
        })

}

// let arrayOfPromises = [getCharacter('hulk'), getComics(1009351)];
//Promise.all(arrayOfPromises).then((data) => { console.log(data[1][0].name) });

// getComics(1009351).then((comics) => { console.log(comics[0].name) })
// getCharacter('hulk').then((character) => { console.log(character.characterID) });
//getCharacter('thor').then((character) => { getComics(character.characterID).then((comics) => { console.log(comics[0].name) }) });


module.exports = {
    getCharacter,
    getComics
}

// module.exports = getCharacter;
// module.exports = getComics;