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
            const characterNotFound = () => {
                document.querySelector("#home-page").innerHTML = `<div class="img-container-cnf">
                <div class="banner">
                    <div class="banner-text">
                        <h1 id="cnf">CHARACTER NOT FOUND</h1>
                        <h3 id="cnf1">Follow Heimdall to return home or click on Mjolnir for more Marvel Links</h3>
                    </div>
                </div>
                <footer id="footer-cnf">
                    <div class="homepage-button-container-cnf">
                        <button type="button" onclick="location.href='links.html'"><img src="Assets/images/thor12.png"></button>
                    </div>
                    <div class="links-page-button-container-cnf">
                        <button type="button" onclick="location.href='index.html'"><img
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6bdb31cf-8741-41b8-b13e-5156cacdec90/d583fqt-aab8831f-e96c-4257-8ddc-9c70cce3deef.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiZGIzMWNmLTg3NDEtNDFiOC1iMTNlLTUxNTZjYWNkZWM5MFwvZDU4M2ZxdC1hYWI4ODMxZi1lOTZjLTQyNTctOGRkYy05YzcwY2NlM2RlZWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l1dF2gQQN6ehJN-89DzBOTC_9xMzWCGZ5W4ugI_FZbw"></button>
                    </div>
                </footer>
            </div>`
            }
            characterNotFound();
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