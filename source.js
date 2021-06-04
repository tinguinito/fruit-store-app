console.log('Hola, bienvenidos a mi log de la fruteria xD')

document.querySelector('#form-product').style.display = 'none'

var sendStatus = ''

let products = [
    {sku: "prod-1", product: "Manzana verde", quantity: 50, price: 500, un: 'KG'},
    {sku: "prod-2", product: "Manzana Roja", quantity: 40, price: 600, un: 'KG'},
    {sku: "prod-3", product: "Uva Moscatel", quantity: 20, price: 1500, un: 'KG'},
    {sku: "prod-4", product: "Zapallo", quantity: 10, price: 2000, un: 'UN'},
]

console.log(products);
let tableProduct = document.querySelector("#table-products");

console.log(tableProduct);

function generateTableData(table, data) {
    //iterate data list
    for (let element of data) {
        //call funtion
        insertNewRow(element)
    }
}


let loadProducts = document.querySelector("button.btn.btn-primary")

//trigger event when a user push click on a button
loadProducts.onclick = (event) => {
    generateTableData(tableProduct, products);
}

let addProduct = document.querySelector("button.btn.btn-success")
console.log(addProduct);

addProduct.onclick = () => {
    //create new product
    let newProduct = {sku: "prod-5", product: "Verengena", quantity: 5, price: 1200, un: 'UN'};

    //insert new product in table html
    insertNewRow(newProduct);

    //add to product list and it then will send to back end
    products.push(newProduct)
}

function insertNewRow(newProduct) {
    //create new row
    let row = tableProduct.insertRow();
    //iterate each element in a cell
    row.setAttribute('id', newProduct.sku)

    //set propierties of input checkboxes
    let selectCell = row.insertCell();
    let select = document.createElement('input')
    select.type = 'checkbox'
    selectCell.appendChild(select)
    select.setAttribute('class', 'form-check-input col-1')
    select.setAttribute('id', newProduct.sku)
    select.setAttribute('name', 'products')
    //add event click for each row
    select.onclick = ((ev) => {
        let group = document.querySelectorAll("input[type='checkbox']");
        for (let i = 0; i < group.length; i++) {
            if (group[i] !== ev.target) {
                group[i].checked = false;
            }
        }
    });

    for (let key in newProduct) {
        //create a cell
        let cell = row.insertCell();
        //create a text node for storage data
        //get data of element
        let text = document.createTextNode(newProduct[key]);
        //add data
        cell.appendChild(text);
    }
}

let modifiedButtonProduct = document.querySelector("button.btn.btn-secondary")
console.log(modifiedButtonProduct);

modifiedButtonProduct.onclick = () => {

    let group = document.querySelectorAll("input[type='checkbox']");
    let sku = document.querySelector('input#sku')
    let product = document.querySelector('input#product')
    let quantity = document.querySelector('input#quantity')
    let price = document.querySelector('input#price')

    for (let i = 0; i < group.length; i++) {

        if (group[i].checked === true) {
            // debugger
            let tr = tableProduct.querySelector(`#${group[i].id}`)
            console.log(tr)
            sku.value = tr.cells[1].innerText
            product.value = tr.cells[2].innerText
            quantity.value = tr.cells[3].innerText
            price.value = tr.cells[4].innerText

            sendStatus = 'modified';
            document.querySelector('#form-product').style.display = 'flex'

        }
    }


}

let submitButton = () => {
    console.log('hola')
    let group = document.querySelectorAll("input[type='checkbox']");
    let sku = document.querySelector('input#sku')
    let product = document.querySelector('input#product')
    let quantity = document.querySelector('input#quantity')
    let price = document.querySelector('input#price')
    if (sendStatus === 'modified') {
        for (let i = 0; i < group.length; i++) {
            if (group[i].checked === true) {
                let tr = tableProduct.querySelector(`#${group[i].id}`)
                console.log(tr)
                // debugger
                tr.cells[1].innerText = sku.value
                tr.cells[2].innerText = product.value
                tr.cells[3].innerText = quantity.value
                tr.cells[4].innerText = price.value
            }
        }
    } else if (sendStatus === 'insert') {
        //add method for insert new product

    }

    sendStatus = ''
    clearInputs()
    document.querySelector('#form-product').style.display = 'none'
}

function clearInputs() {
    sku.value = ''
    product.value = ''
    quantity.value = 0
    price.value = 0
};

deletProduct = () => {
    let group = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < group.length; i++) {
        if (group[i].checked === true) {
            let tr = tableProduct.querySelector(`#${group[i].id}`)
            tr.remove();

        }
    }
}




