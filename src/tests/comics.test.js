const Comics = require('../components/comics');
const comicsApiCall = require('./comicsApiCall.json');

let comicArray;
let comicObject;

beforeEach(() => {
comicObject = new Comics(comicsApiCall);
comicArray = comicObject.getListOfComics();
})

test('should read properly from the comicsApiCall', () => {

expect(comicArray[0].name).toEqual("Captain America Epic Collection: Sturm Und Drang (Trade Paperback)");
expect(comicArray[0].imagePath).toEqual("http://i.annihil.us/u/prod/marvel/i/mg/4/50/62ed84993f381/portrait_incredible.jpg");
expect(comicArray[0].description).toEqual("There is no description available.");
expect(comicArray[0].yearReleased).toEqual("2022-08-10");
 

})
test('should return an array', () => {

expect(Array.isArray(comicArray)).toBe(true);

})