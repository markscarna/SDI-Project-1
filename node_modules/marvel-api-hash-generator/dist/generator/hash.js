"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const md5Js = require("md5.js");
function getApiHash(timestamp, privateKey, publicKey) {
    return new md5Js().update(`${timestamp}${privateKey}${publicKey}`).digest('hex');
}
exports.getApiHash = getApiHash;
