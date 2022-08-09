let pictureNamingConvention = '/portrait_medium.jpg';

class Comics {
    constructor(comicsObject) {
        this.comicsObject = comicsObject;
        this.imageURL;
        this.listOfComics = comicsObject.data.results
    }
    getListOfTitles() {
        let tempListOfTitles = [];
        for (let tempTitle of this.comicsObject.data.results) {
            tempListOfTitles.push(tempTitle.title)
        }
        return tempListOfTitles;
    }
}

export default Comics;