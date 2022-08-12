// const getCharacter = require('./components/apiFetch');
// const getComics = require('./components/apiFetch');
var myFunctions = require("./components/apiFetch")

const buildCharacterPage = (characterObject) => {
    let lotOfImages = ``;
    for (let i = 0; i < 35; i++) {
        lotOfImages += `<button id = "image ${i}"type="button"><img src="${characterObject.listOfComics[i].imagePath}"></button>`
    }
    document.querySelector("#home-page").innerHTML = `<div id="character-page">
        <h1 id="header">${characterObject.name}</h1>
        <div class="img-container-character">
        <div class="flexbox-container-character">    
                <img class="item-character"
                    src="${characterObject.imageURL}">
                <div class="flexbox-item-character flexbox-item-1-character" >${characterObject.description}</div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="${characterObject.listOfComics[0].imagePath}" class="d-block w-100" alt="Comic 1">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>${characterObject.listOfComics[0].name}</h5>
                      <p>${characterObject.listOfComics[0].description}</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="${characterObject.listOfComics[1].imagePath}" class="d-block w-100" alt="Comic 2">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>${characterObject.listOfComics[1].name}</h5>
                      <p>${characterObject.listOfComics[1].description}</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="${characterObject.listOfComics[2].imagePath}" class="d-block w-100" alt="Comic 3">
                    <div class="carousel-caption d-none d-md-block">
                      <h5>${characterObject.listOfComics[2].name}</h5>
                      <p>${characterObject.listOfComics[2].description}</p>
                    </div>
                  </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
                </div>
               </div>                 
            </div>`
    // <div class="flexbox-item-character flexbox-item-3-character">${characterObject.listOfComics[0].description}</div>
    // <div class="button-container-character"> 
    //     <button type="button" onclick="location.href='links.html'"><img src="Assets/images/thor12.png"></button>
    // </div> 
}

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

const resetHomepage = () => {
    document.querySelector("#home-page").innerHTML = `<div class="banner-homepage">
    </div>
    <div class="img-container-homepage">
        <div class="box-homepage"></div>
        <form action="" class="search-bar">
            <input id="searchInput" type="text" placeholder="Enter Any Marvel Character!" name="q">
            <button id="searchButton" type="button"><img src="Assets/images/america1.png"></button>
        </form>
        <div class="button-container-homepage">
            <button type="button" onclick="location.href=' links.html'"><img
                    src="Assets/images/thor12.png"></button>
        </div>
    </div>
    <div class="bottom">
    
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
document.querySelector("#homepage-button-container-cnf").addEventListener("click", resetHomepage)
document.querySelector("#homepage-button-container-cnf").addEventListener("click", resetHomepage)
// console.log(document);

// module.exports = searchBar;