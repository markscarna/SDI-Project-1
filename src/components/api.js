import fetch from 'node-fetch'
import { getApiHash } from 'marvel-api-hash-generator';
import Character from './character.js';
import Comics from './comics.js';


const timeStamp = Date.now();
const privateKey = '07fc721ea9a1069019e21eda9504d830177110df';
const publicKey = '489d289854fbfcb356ded93a89e0451d';
const hashValue = getApiHash(timeStamp, privateKey, publicKey);

let characterName = 'Iron%20Man';
let characterID = 0;
let currentCharacter = {};


const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters';
const requestConstantComics = 'http://gateway.marvel.com/v1/public/characters/';

const charactersURL = `${requestConstantCharacters}?name=${characterName}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=100`;
//const comicsURL = `${requestConstantComics}${characterID}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=100`;

// console.log(exampleUrl);

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
                console.log(data.data.results[0].title);
                let comicList = new Comics(data);
                console.log(comicList.getListOfTitles())
            })
        //console.log(characterID);
        // console.log(currentCharacter.name)

        // console.log(currCharacter.description)
        // console.log(currCharacter.imageURL)
        // console.log(currCharacter.listOfComics)
        //console.log(currCharacter.getListOfComics());
    })

// setTimeout(() => {
//     console.log(currCharacter.name)
//     console.log(currCharacter.name)
// }, 2000)
    // data.results[2].description
// console.log(pulledData.results[0].id);