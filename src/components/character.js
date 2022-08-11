
let pictureNamingConvention = '/portrait_uncanny.jpg';

class Character {
    constructor(characterObject) {
        this.characterObject = characterObject
        this.name = characterObject['data']['results'][0]['name'];
        this.description = characterObject['data']['results'][0]['description']
        this.imageURL = characterObject['data']['results'][0]['thumbnail']['path'] + pictureNamingConvention;
        this.listOfComics = [];
        this.characterID = characterObject['data']['results'][0]['id'];
        if (this.description === "") {
            this.description = 'There is no description available for this character.'
        }
    }





    // getListOfComics() {
    //     let tempComics = []
    //     for (let comic of this.listOfComics) {
    //         tempComics.push(comic.name);
    //     }
    //     return tempComics;
    // }
}

//export default Character;
module.exports = Character;