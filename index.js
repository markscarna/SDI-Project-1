import fetch from 'node-fetch'
import crypto from 'crypto'
var name = 'braitsch';
var hash = crypto.createHash('md5').update(name).digest('hex');


fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=489d289854fbfcb356ded93a89e0451d${hash}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })