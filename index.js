const { readJsonFile, writeJsonFile} = require('./src/helper')
const { create, index, show, edit, destroy } = require('./src/controllers')

const planeArt = `
                                                _ .
__|__                       _ .                (  _ )_
\\___/                    (  _ )_            (_, __(_ ,)
 | |                   (_  _(_ ,)
 | |
_|_|______________  
        /|\\ 
      */ | \\*
      / -+- \\
  ---o--(_)--o---
    /  0 " 0  \\                   |
  */     |     \\*                 |
  /      |      \\               .-'-.
*/       |       \\*            ' ___ '
                     ---------'  .-.  '---------
     _________________________'  '-'  '_________________________
      ''''''-|---|--/    \\==][^',_m_,'^][==/    \\--|---|-''''''
                    \\    /  ||/   H   \\||  \\    /
                     '--'   OO   O|O   OO   '--' ` ;


console.log(planeArt)





// process.argv[0] =>  node
// procress.argv[1] => index.js
//procress.argv[2] => update
// [node, index.js, create, OMnu, 2000, dogfish, false]
function run() {
    const action = process.argv[2]
    let id = ""
    let items = readJsonFile("./data", "data.json")
    let updatedItems = [...items]

   let cart = readJsonFile("./data", "cart.json");
   let updatedCart = [...cart];

    switch(action) {
        case "create":
            // const name = process.argv[3]
            // const price =process.argv[4]
            updatedItems = create(items)
            break;

        case "index":
            console.log(items)
             break;

        case "show":
            id = process.argv[3]
            const singleItem = show 
            (items, id)
            console.log(singleItem)
            break;

        case "destroy":
            id = process.argv[3]
            updatedItems = destroy(items, id)
            break;

        case "update":
            id = process.argv[3]
            updatedItems = edit(items, id, process.argv[4], process.argv[5], process.argv[6])
            break;

        case "add-to-cart":
            id = process.argv[3]
        //     // store show(items, id) in a variable
        //     // push  ^ to updatedCart 
            const storage = show(items, id)
            updatedCart.push(storage)
            break;

        case "view-cart":
            console.log(updatedCart)
            break;

        case "destroy-from-cart":
            id = process.argv[3]
            updatedCart = destroy(cart, id)
            break;

        case "empty-cart":
            updatedCart = []
            break;
           
    }


    writeJsonFile("./data", "data.json", updatedItems)
    writeJsonFile("./data", "cart.json", updatedCart)
}

run()