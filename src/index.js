var myFunctions = require("./components/apiFetch")

const buildCharacterPage = (characterObject) => {
    let lotOfImages = ``;
    for (let i = 0; i < 10; i++) {
        lotOfImages += `<button id = "image ${i}"type="button"><img src="${characterObject.listOfComics[i].imagePath}"></button>`
    }
    document.querySelector("#home-page").innerHTML = `<div id="character-page">
    <header>
    <nav>
       <div id="hero-name">${characterObject.name}</div>   
    </nav>
</header>
<div id="hero-description">
    <img id="hero-image" src="${characterObject.imageURL}">
    ${characterObject.description}
</div>
<div id="carousel">
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${characterObject.listOfComics[0].imagePath}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${characterObject.listOfComics[0].name}</h5>
        <p>${characterObject.listOfComics[0].description}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${characterObject.listOfComics[1].imagePath}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${characterObject.listOfComics[1].name}</h5>
        <p>${characterObject.listOfComics[1].description}</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${characterObject.listOfComics[2].imagePath}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${characterObject.listOfComics[2].name}</h5>
        <p>${characterObject.listOfComics[2].description}</p>
      </div>    
    </div>
    <div class="carousel-item">
    <img src="${characterObject.listOfComics[3].imagePath}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>${characterObject.listOfComics[3].name}</h5>
      <p>${characterObject.listOfComics[3].description}</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="${characterObject.listOfComics[4].imagePath}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>${characterObject.listOfComics[4].name}</h5>
      <p>${characterObject.listOfComics[4].description}</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="${characterObject.listOfComics[5].imagePath}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>${characterObject.listOfComics[5].name}</h5>
      <p>${characterObject.listOfComics[5].description}</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="${characterObject.listOfComics[6].imagePath}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>${characterObject.listOfComics[6].name}</h5>
      <p>${characterObject.listOfComics[6].description}</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="${characterObject.listOfComics[7].imagePath}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>${characterObject.listOfComics[7].name}</h5>
      <p>${characterObject.listOfComics[7].description}</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="${characterObject.listOfComics[8].imagePath}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>${characterObject.listOfComics[8].name}</h5>
      <p>${characterObject.listOfComics[8].description}</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="${characterObject.listOfComics[9].imagePath}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>${characterObject.listOfComics[9].name}</h5>
      <p>${characterObject.listOfComics[9].description}</p>
    </div>
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
<div class="links-page-button-container-cnf">
       <button type="button" onclick="location.href='index.html'"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6bdb31cf-8741-41b8-b13e-5156cacdec90/d583fqt-aab8831f-e96c-4257-8ddc-9c70cce3deef.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiZGIzMWNmLTg3NDEtNDFiOC1iMTNlLTUxNTZjYWNkZWM5MFwvZDU4M2ZxdC1hYWI4ODMxZi1lOTZjLTQyNTctOGRkYy05YzcwY2NlM2RlZWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l1dF2gQQN6ehJN-89DzBOTC_9xMzWCGZ5W4ugI_FZbw"></button></div>
</div>
  <script src="bundle.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
`
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


const searchBar = () => {
    let searchInput = document.getElementById('searchInput');
    let unformattedCharacter = searchInput.value;
    if (unformattedCharacter === "") {
        console.log('text box cannot be blank')
        characterNotFound();
    }
    else {
        let formattedCharacter = encodeURIComponent(unformattedCharacter);
        myFunctions.getCharacter(formattedCharacter).then((character) => { myFunctions.getComics(character.characterID).then((comics) => { character.listOfComics = comics; buildCharacterPage(character) }) });
    }
}


document.querySelector("#searchButton").addEventListener("click", searchBar)


module.exports = {
  buildCharacterPage,
  characterNotFound,
  searchBar
}