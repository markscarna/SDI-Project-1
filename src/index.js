// const getCharacter = require('./components/apiFetch');
// const getComics = require('./components/apiFetch');
var myFunctions = require("./components/apiFetch")

const buildCharacterPage = (characterObject) => {
    document.querySelector("#home-page").innerHTML = `<div id="character-page">
        <div class="banner-character"> </div>
        <div class="img-container-character">
        <div class="flexbox-container">    
                <img class="item"
                    src="${characterObject.imageURL}">
                <div class="flexbox-item flexbox-item-1">${characterObject.description}</div>
                <div class="flexbox-item flexbox-item-2"></div>
                <div class="flexbox-item flexbox-item-3"></div>
            </div>`
}


const searchBar = () => {
    let searchInput = document.getElementById('searchInput');
    let unformattedCharacter = searchInput.value;
    let headerName = document.getElementById('name');
    if (unformattedCharacter === "") {
        console.log('text box cannot be blank')
    }
    else {
        let formattedCharacter = encodeURIComponent(unformattedCharacter);
        let characterName = "";
        myFunctions.getCharacter(formattedCharacter).then((character) => { buildCharacterPage(character) })



        // myFunctions.getCharacter(formattedCharacter).then((character) => { console.log(character) });
        // myFunctions.getComics(1009368).then((comic) => { console.log(comic) });
        // myFunctions.getCharacter(formattedCharacter).then((character) => { myFunctions.getComics(character.characterID).then((comics) => { console.log(comics[0].name) }) });
    }
}

document.querySelector("#searchButton").addEventListener("click", searchBar)
// console.log(document);

// module.exports = searchBar;