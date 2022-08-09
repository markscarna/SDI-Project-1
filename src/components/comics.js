let pictureNamingConvention = '/portrait_medium.jpg';

class Comics {
    constructor(comicsObject) {
        this.comicsObject = comicsObject;
    }
    getListOfComics() {
        let arrayOfComics = [];
        for (let tempComicResult of this.comicsObject.data.results) {
            let tempComic = {
                name: "",
                imagePath: "",
                description: "",
                yearReleased: 0,
            };
            tempComic.name = tempComicResult.title;
            tempComic.imagePath = tempComicResult.thumbnail.path + pictureNamingConvention;
            tempComic.description = tempComicResult.

                arrayOfComics.push(tempComic);
        }
        return arrayOfComics;
    }
}

export default Comics;