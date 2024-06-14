// const fs = require('node:fs') //fs = fileSystem
const { readFileSync, writeFileSync } = require('node:fs')

function writeJsonFile(path, fileName, data) {
    //update the data fro Javascript to JSON
    data = JSON.stringify(data, 0, 2)
    return writeFileSync(`${path}/${fileName}`, data)
}

function readJsonFile(path, fileName) {
    const data = readFileSync(`${path}/${fileName}`)
    // if there is data return it as javascript, if there isnt data return it as an empty array
    
    return data ? JSON.parse(data) : []
}


module.exports = { writeJsonFile, readJsonFile}