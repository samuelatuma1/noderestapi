const fs = require("fs")
const products = require("../data/products.json")
const utils = require("../utils.js")

function findAll(){
   
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

/**
 * Returns the product with an id that matches the id given. If none found, returns {"msg" : "not Found"}
 * @param {Number} id : id an Integer used to reference the id of a product
 */
function findId(id){
    const promise = new Promise ((resolve, reject) => {
        for(let value of products){
        
            if(value.id == id){
                return resolve(value)
            }
        }
        return reject(null)
    })
    return promise
}

/**Adds product to products.json file
 * @param {String} product : json Representation of the product
 */
function createAndAdd(product){

    const addPromise = new Promise((resolve, reject) => {
        const productData = JSON.parse(product)
        const addIdToProduct = {...productData, id:  products.length + 1}
        products.push(addIdToProduct)
        utils.addProduct('./data/products.json', products)
        resolve(addIdToProduct)
    })

    return addPromise
}

module.exports.findAll = findAll
module.exports.findId = findId
module.exports.createAndAdd = createAndAdd