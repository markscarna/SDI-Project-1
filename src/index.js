// const getCharacter = require('./components/apiFetch');
// const getComics = require('./components/apiFetch');
var myFunctions = require("./components/apiFetch")

const buildCharacterPage = (characterObject) => {
    document.querySelector("#home-page").innerHTML = `<div id="character-page">
        <div class="banner-character"> </div>
        <div class="img-container-character">
        <div class="flexbox-container-character">    
                <img class="item-character"
                    src="${characterObject.imageURL}">
                <div class="flexbox-item-character flexbox-item-1-character" >${characterObject.description}</div>
                <div class="flexbox-item-character flexbox-item-2-character"><img src= "${characterObject.listOfComics[0].imagePath}"><img src= "${characterObject.listOfComics[1].imagePath}"><img src= "${characterObject.listOfComics[2].imagePath}"></div>
                <div class="flexbox-item-character flexbox-item-3-character">${characterObject.listOfComics[0].description}</div>                
            </div>`
    // <div class="button-container-character"> 
    //     <button type="button" onclick="location.href='links.html'"><img src="Assets/images/thor12.png"></button>
    // </div> 
}
const characterNotFound = () => {
    document.querySelector("#home-page").innerHTML = `<div class="img-container-character-not-found">
    <div class="banner">
        <div class="banner-text">
            <h1>CHARACTER NOT FOUND</h1>
            <h3>Follow Heimdall to return home or click on Mjolnir for more Marvel Links</h3>
        </div>
    </div>
    <footer id="footer">
        <div class="button-container">
            <button type="button" onclick="location.href='links.html'"><img src="Assets/images/thor12.png"></button>
        </div>
        <div class="homepage-button-container">
            <button type="button" onclick="location.href='HomePage.html'"><img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6bdb31cf-8741-41b8-b13e-5156cacdec90/d583fqt-aab8831f-e96c-4257-8ddc-9c70cce3deef.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiZGIzMWNmLTg3NDEtNDFiOC1iMTNlLTUxNTZjYWNkZWM5MFwvZDU4M2ZxdC1hYWI4ODMxZi1lOTZjLTQyNTctOGRkYy05YzcwY2NlM2RlZWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l1dF2gQQN6ehJN-89DzBOTC_9xMzWCGZ5W4ugI_FZbw"></button>
        </div>
    </footer>
</div>`
}



const searchBar = () => {
    let searchInput = document.getElementById('searchInput');
    let unformattedCharacter = searchInput.value;
    let headerName = document.getElementById('name');
    if (unformattedCharacter === "") {
        console.log('text box cannot be blank')
        characterNotFound();
    }
    else {
        let formattedCharacter = encodeURIComponent(unformattedCharacter);
        let characterName = "";
        myFunctions.getCharacter(formattedCharacter).then((character) => { myFunctions.getComics(character.characterID).then((comics) => { character.listOfComics = comics; buildCharacterPage(character) }) });
    }
}

document.querySelector("#searchButton").addEventListener("click", searchBar)
// console.log(document);

// module.exports = searchBar;