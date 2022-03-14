console.log('started')

const data = "/product/12"
const matches = data.match(/\/product\/[0-9]+/)
if (matches){
    let list_data = data.split("/")
    console.log(list_data)
    const id = list_data[2]
    console.log(id)
}

// Allocate memory space for a buffer
const buf1 = Buffer.alloc(10)
// Write to a buffer
buf1.write("Hello to you friend")

// Convert data to bufer
const buf2 = Buffer.from("Hello, world")
console.log(buf1)
console.log("C".charCodeAt(0))
console.log("c".charCodeAt(0))

