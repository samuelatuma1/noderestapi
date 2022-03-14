const http = require("http")
const fs = require("fs")
const path = require("path")

const controller = require("./controller/productController")
let server = http.createServer((req, res) => {
        let url = req.url
        if (url == '/'){
            controller.indexPage(req, res)
        }
        
        else if (url === '/products' && req.method =='GET'){
            return controller.allData(req, res)
        }
        else if (url.match(/\/product\/[0-9]+/)){
            let list_data = req.url.split("/")
            const id = list_data[2]
            return controller.findById(req, res, id)

        }
        // User trying to add Data
        else if (url === '/products/add'){
            console.log("gotcha...")
            // Get product to be added
            // Post data can be accessed using the on("data") event 
            let body = ''
            req.on("data", (data) => {
                body += data.toString()
            })
            req.on("end", () => {
                console.log(body)
                const data = JSON.parse(body)
                const product = data
                controller.addData(req, res, JSON.stringify(product))
            })
        }

        // User trying to update Data
        else if(url.match(/\/update\//)){
            controller.updateAny(req, res)
        }


        else{
            res.writeHead(404, {"Content-Type" : "application/json"})
            res.end(JSON.stringify({message : "404 | Not found"}))

        }
})

let port = process.env.PORT || 8000

server.listen(port, () => {console.log(`Listening on Port ${port}`)})