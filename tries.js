// console.log('started')

// const data = "/product/12"
// const matches = data.match(/\/product\/[0-9]+/)
// if (matches){
//     let list_data = data.split("/")
//     console.log(list_data)
//     const id = list_data[2]
//     console.log(id)
// }

// // Allocate memory space for a buffer
// const buf1 = Buffer.alloc(10)
// // Write to a buffer
// buf1.write("Hello to you friend")

// // Convert data to bufer
// const buf2 = Buffer.from("Hello, world")
// console.log(buf1)
// console.log("C".charCodeAt(0))
// console.log("c".charCodeAt(0))

// nexttick
console.log("Hi")
let count = 0
process.nextTick(() => {console.log("Hey best" + count); count += 1}, count)
console.log("Hi last")
process.nextTick(() => {console.log("Hey best" + count); count += 1}, count)


const event = require("events")

const Listen = new event()
const listenTo = (msg) => {console.log(`I heard your msg : ${msg}`)}
Listen.addListener("listen", listenTo)
Listen.addListener("sleep", () => {
    console.log("I am sleeping")
    Listen.off("listen", listenTo)
})
Listen.emit("listen", "I love you")
Listen.emit("sleep")
Listen.emit("listen", "I love you 3000")

    // Make Directory
// const fs = require("fs")
// const path = require("path")
// // fs.mkdir(path.join(__dirname, 'syncWrite'), {}, (err) => {
// //     console.log("Hey There")})
// fs.writeFile(path.join(__dirname, 'syncWrite', 'first.txt'), 'This is meant to be synchronous', {"encoding" : "utf8"}, (err) => {
//     if(err) console.log("An error occured")
//     console.log("File wrtten to")
//     fs.appendFile(path.join(__dirname, 'syncWrite', 'first.txt'),  `\n1.Python \n2. JavaScript \n3. C++`, (e) => {
//         if(e) console.log(e)
//         console.log("Data appended")
//     })
// })

const aboutMe = [{"name" : "Samuel"}, {"name" : "Esther"}, {"name" : "Victoria"}]
// Find Index returns the index of the item on an array that its call back returns true
console.log(aboutMe.findIndex((data) => data.name == 'Victoria'))
