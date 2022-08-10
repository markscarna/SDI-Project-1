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


const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters';
const requestConstantComics = 'http://gateway.marvel.com/v1/public/characters/';


//const comicsURL = `${requestConstantComics}${characterID}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=100`;


// console.log(exampleUrl);
//consider chaining api calls, add catch statements
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
            fetch(`${requestConstantComics}${characterID}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=100`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    // console.log(data.data.results[0].title);
                    let comicList = new Comics(data);
                    let comicObject = comicList.getListOfComics();
                    console.log(comicObject[1].description);
                    console.log(comicObject.description);
                })
            console.log(currentCharacter.name)
            console.log(currentCharacter.description)
            console.log(currentCharacter.imageURL)
        })
        .catch(() => {
            console.log('character not found');
        })
}

// setTimeout(() => {
//     console.log(currCharacter.name)
//     console.log(currCharacter.name)
// }, 2000)
// data.results[2].description
// console.log(pulledData.results[0].id);

module.exports = apiFetch;