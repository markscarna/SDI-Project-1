const apiFetch = require('./components/apiFetch');



const searchBar = () => {
    let searchInput = document.getElementById('searchInput');
    let unformattedCharacter = searchInput.value;
    if (unformattedCharacter === "") {
        console.log('text box cannot be blank')
    }
    else {
        let formattedCharacter = unformattedCharacter.split(" ").join("%20");
        // console.log(formattedCharacter);
        apiFetch(formattedCharacter);
        //return characterName;
    }
}
document.querySelector("#searchButton").addEventListener("click", searchBar)
// console.log(document);

// module.exports = searchBar;