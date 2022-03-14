const models = require("../models/productsmodel.js")
const fs = require("fs")
const utils = require("../utils.js")
/**
 * Returns a JSON response containing all Products
 */
const allData = async (req, res) => {
    const products = await models.findAll()
    res.writeHead(200, {"Content-Type" : "application/json"})
    res.end(JSON.stringify(products))
}

/**
 * Returns a JSON response of the product matching the id being investigated
 * @param {Object} req : req request from http module
 * @param {Object} res : res respone from http module
 * @param {Number} id : id corresponding to the id of the investigated product
 */
const findById = async (req, res, id) => {
    try{
        const product = await models.findId(id)
        
        if (product){
            res.writeHead(200, {"Content-Type" : "application/json"})
            res.end(JSON.stringify(product))
        }
    }
    catch (err){
        res.writeHead(404, {"Content-Type" : "application/json"})
        res.end(JSON.stringify({"msg" : `Product with id ${id} not found`}))
    }

}



const addData = async (req, res, product) => {
    const addProduct = await models.createAndAdd(product)
    res.writeHead(201, {"Content-Type" : "application/json"})
    res.end(JSON.stringify(addProduct))
    console.log(addProduct)

}

const indexPage = async (req, res) => {
    
    res.writeHead(200, {"Content-Type" : "text/html"})
    let pageDetails = await utils.readFile('./public/index.html')
    res.end(pageDetails)
    

}

const updateAny = async (req, res) => {
    const allProducts  = await utils.readFile('./public/allProducts.html', 'utf8')
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.end(allProducts)
}
module.exports.findById = findById
module.exports.allData = allData
module.exports.addData = addData
module.exports.updateAny = updateAny
module.exports.indexPage = indexPage
