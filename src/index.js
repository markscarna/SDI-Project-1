const ApiFetch = require('./components/apiFetch');



const searchBar = () => {
    let searchInput = document.getElementById('searchInput');
    let unformattedCharacter = searchInput.value;
    let headerName = document.getElementById('name');
    let paragraphDescription = document.getElementById('description');
    if (unformattedCharacter === "") {
        console.log('text box cannot be blank')
    }
    else {
        let formattedCharacter = unformattedCharacter.split(" ").join("%20");
        // console.log(formattedCharacter);
        let tempApi = new ApiFetch(formattedCharacter);
        tempApi.getResponse();
        //return characterName;
        //eaderName.innerText = tempApi.currentCharacter['name'];        

        setTimeout(() => {
            console.log("inside index: " + tempApi.currentCharacter.name);
        }, 3000)
        console.log("inside index2: " + tempApi.currentCharacter.name);


        // console.log(tempApi.currentCharacter);
        // console.log(tempApi);
    }

}
document.querySelector("#searchButton").addEventListener("click", searchBar)
// console.log(document);

// module.exports = searchBar;