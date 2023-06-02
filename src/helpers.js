// const fs = require("node:fs")

const { readFileSync, writeFileSync } = require("node:fs")




function readFileSync(path, fileName) {

    const object = readFileSync(`${path}/${fileName}`, "utf-8");
    return object ? JSON.parse(object) : [];
}


function writeFileSync(path, fileName, data) {

    data = JSON.stringify(data)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
}




module.exports = {
    readFileSync,
    writeFileSync
}