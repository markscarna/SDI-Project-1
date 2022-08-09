
let pictureNamingConvention = '/portrait_uncanny.jpg';

class Character {
    constructor(characterObject) {
        this.name = characterObject['data']['results'][0]['name'];
        this.description = characterObject['data']['results'][0]['description']
        this.imageURL = characterObject['data']['results'][0]['thumbnail']['path'] + pictureNamingConvention;
        this.listOfComics = characterObject['data']['results'][0]['comics']['collectionURI'];
        this.characterID = characterObject['data']['results'][0]['id'];
    }

    getListOfComics() {
        let tempComics = []
        for (let comic of this.listOfComics) {
            tempComics.push(comic.name);
        }
        return tempComics;
    }
}

export default Character;