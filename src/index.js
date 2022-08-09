import fetch from 'node-fetch'
import { getApiHash } from 'marvel-api-hash-generator';

const timeStamp = Date.now();
const privateKey = '07fc721ea9a1069019e21eda9504d830177110df';
const publicKey = '489d289854fbfcb356ded93a89e0451d';
const hashValue = getApiHash(timeStamp, privateKey, publicKey);
const pictureNamingConvention = 'portrait_uncanny.jpg';
let characterName = 'Iron%20Man';

const requestConstantCharacters = 'https://gateway.marvel.com/v1/public/characters';
const exampleUrl = `${requestConstantCharacters}?name=${characterName}&ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;


fetch(exampleUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.data)
    })
    // data.results[2].description
// console.log(pulledData.results[0].id);