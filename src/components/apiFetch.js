const fetch = require('node-fetch');
const getApiHash = require('marvel-api-hash-generator').getApiHash;
const Character = require('./character');
const Comics = require('./comics');


const timeStamp = Date.now();
const privateKey = '07fc721ea9a1069019e21eda9504d830177110df';
const publicKey = '489d289854fbfcb356ded93a89e0451d';
const hashValue = getApiHash(timeStamp, privateKey, publicKey);

//let characterName = 'iron%20man';
let characterID = 0;
let currentCharacter = {};

var character = {
    name: "",
    description: "",
    imageURL: "",
    comicBooks: []
}

const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters';
const requestConstantComics = 'http://gateway.marvel.com/v1/public/characters/';

const apiFetch = (characterName) => {
    // console.log("apiFetch was triggered");
    const charactersURL = `${requestConstantCharacters}?name=${characterName}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=100`;
    fetch(charactersURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            currentCharacter = new Character(data);
        })
        .then(function () {
            characterID = currentCharacter.characterID
            fetch(`${requestConstantComics}${characterID}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=10`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    let comicList = new Comics(data);
                    let comicObject = comicList.getListOfComics();
                    character.comicBooks.push(comicObject);
                })
            character.name = currentCharacter.name;
            character.description = currentCharacter.description;
            character.imageURL = currentCharacter.imageURL;

        })
        .catch((e) => {
            console.log(e);
            console.log('character not found');
        })
}

apiFetch('captain%20america');
// console.log(character.name);

setTimeout(() => {
    console.log(character.name);
    console.log(character.description);
    console.log(character.imageURL);
    console.log(character.comicBooks);
}, 3000)


module.exports = apiFetch;