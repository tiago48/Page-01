'use strict'

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

console.log("Here's a not so completely hidden message")