const {nanoid} = require('nanoid') //nanoid generates random IDs
const {faker} = require("@faker-js/faker")  //importing faker
// console.log(faker.airline.airplane()) 
// console.log(faker.airline.aircraftType())
// console.log(faker.airline.airport())
// console.log(faker.airline.airline())//if I console.log faker, based on what type of data I choose, that it what it will display


function create(items) {

    const item = { 
        name: faker.airline.airplane().name,
        id: nanoid(4),
        priceInCents: `$${Number(faker.number.int({min: 1000000, max: 9999999})).toFixed(2)}`,//converts price string to a number and then converts the price to have 2 decimal spots.
        aircraftType: faker.airline.aircraftType(),
        airport: faker.airline.airport().name,
        airline: faker.airline.airline().name,
        inStock: true,

        // quantity: //faker.number.int(100) ,
    }
     items.push(item)
     return items
}

const index = (items) => {
    return items.map((item) => item)
}

const show = (items, id) => {
    const item = items.find((item) => item.id === id )
    return item;
}

const destroy = (items, id) => {
     const item = items.findIndex((item) => item.id === id)
    if(item > -1){
        items.splice(item, 1)
        console.log("Plane successfully removed from the inventory.")
        return items 
    } else {
        console.log("Plane not found. No action taken")
        return items
    }
}


const edit = (items, id, updatedPrice, updatedName, updatedStock) => {
    const index = items.findIndex((item) => item.id === id)
    if(index > -1){
        // items[index].name = updatedItems
        items[index].priceInCents = `$${Number(updatedPrice).toFixed(2)}`
        console.log(updatedName, updatedStock)
        items[index].name = updatedName
        items[index].inStock = 
        //!item[index].inStock
    
    console.log(items[index])
    return(items)
 }
}




 module.exports = { create, index, show, edit, destroy }