// Erstebank TAN automatic input
// Created by Marin Usalj | mneorr.com on 03/25/2013
//
// Licensed under MIT
//
//

var table = [
  [1123123, 12312422, 123123123, 123123214],
  [1123123, 12312422, 123123123, 123123214],
  [1123123, 12312422, 123123123, 123123214],
  [1123123, 12312422, 123123123, 123123214],
  [1123123, 12312422, 123123123, 123123214],
  [1123123, 12312422, 123123123, 123123214],
  [1123123, 12312422, 123123123, 123123214],
  [1123123, 12312422, 123123123, 123123214]
];

var row = document.getElementById('ctl00_ContentPlaceHolder1_lblRedak').textContent;
var column = document.getElementById('ctl00_ContentPlaceHolder1_lblStupac').textContent;
var numbah = table[row-1][column-1];

var input_field = document.getElementById('ctl00_ContentPlaceHolder1_txbTan')
input_field.value = numbah;
