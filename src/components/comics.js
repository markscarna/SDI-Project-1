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
                description: "There is no description available.",
                yearReleased: 0,
            };
            tempComic.name = tempComicResult.title;
            tempComic.imagePath = tempComicResult.thumbnail.path + pictureNamingConvention;
            if (tempComicResult.description !== null) {
                tempComic.description = tempComicResult.description;
            }
            let formattedDate = tempComicResult.dates[0].date.split('T')
            tempComic.yearReleased = formattedDate[0];
            arrayOfComics.push(tempComic);
        }
        return arrayOfComics;
    }
}

//export default Comics;
module.exports = Comics;