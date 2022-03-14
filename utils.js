const fs = require("fs")
const addProductToFile = (filepath, data) => {
    fs.writeFileSync(filepath, JSON.stringify(data), 'utf8', (err) => {
        if (err) console.log(err)
        console.log("file Written to")
    })
}

/**Takes the file path and the encoding. Returns the read file content as a promise
 * @param {String} filepath filepath : The path to the file to be read relative to utils.js
 * @param {String} encoding encoding : The encoding type expected of the returned file
 */
const readFile = (filepath, encoding='utf8')  => {
    const promise = new Promise((resolve, reject) => {
        const file_data = fs.readFile(filepath, {"encoding" : encoding}, (err, data) => {
            if (err) console.log(err);
            resolve(data)
        })
    })
    return promise
}


const loadPostData = (req) => {
    const promisedData = new Promise((resolve, reject) => {
        let body = ''
        req.on("data", (dataChunk) => { 
             // dataChunk is a stream. Data is accumulated in a buffer until it is reasonable chunk
             // Then it is converted to a string as seen here.
            body += dataChunk.toString()
        })

        resolve(body)
    })
}



module.exports.addProduct = addProductToFile
module.exports.readFile = readFile