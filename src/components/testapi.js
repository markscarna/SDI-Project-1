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
class ApiFetch {

    constructor(characterName) {
        //this.characterName = characterName;
        this.currentCharacter = {};
        this.characterID = 0;
        this.comicListArray = [];
        this.charactersURL = `${requestConstantCharacters}?name=${characterName}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=100`;
    }
    getResponse() {
        // console.log("apiFetch was triggered");
        console.log(this.charactersURL);
        fetch(this.charactersURL)
            .then(function (response) {
                // console.log('hitting fetch');
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                let newCharacter = new Character(data);
                this.currentCharacter = newCharacter;
                console.log("inside ApiFetch :" + this.currentCharacter.name);
            })
            .then(function () {
                this.characterID = this.currentCharacter.characterID
                const secondURL = `${requestConstantComics}${this.characterID}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}&limit=100`;
                console.log(secondURL);
                fetch(secondURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        // console.log(data.data.results[0].title);
                        let tempComicList = new Comics(data);
                        this.comicListArray = tempComicList.getListOfComics();
                        // console.log(comicObject[1].description);
                        // console.log(comicObject.description);
                    })
                // console.log(currentCharacter.name)

                // console.log(currentCharacter.description)
                // console.log(currentCharacter.imageURL)
            })
            .catch(() => {
                console.log('character not found');
            })
        //console.log("inside ApiFetch: " + this.currentCharacter);
        var promise = new Promise(function (resolve, reject) {
            /* Do something, possibly async, then... */

            if (/* everything turned out fine */) {
                resolve("Stuff worked!");
            }
            else {
                reject(Error("It broke"));
            }
        });

        return promise;
    }
}

// setTimeout(() => {
//     console.log(currCharacter.name)
//     console.log(currCharacter.name)
// }, 2000)
// data.results[2].description
// console.log(pulledData.results[0].id);

module.exports = ApiFetch;