 function lookup(){

  Math.seedrandom(document.getElementById("fname").value);

  let chars = [];

  for (let i = 0; i < 512; i++) {

    chars.push(Math.floor(Math.random() * 27));

  }

 let alphabet = 'abcdefghijklmnopqrstuvwxyz '.split('');

   let file = [];

 for (let i = 0; i < 512; i++) {

    file.push(alphabet[chars[i]])

 }

   document.getElementById("rand").value = file.join("");

}

function download() {

if(document.getElementById("rand").value !== ""){

  var element = document.createElement('a');

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.getElementById("rand").value));

  element.setAttribute('download', document.getElementById("fname").value);

  element.style.display = 'none';

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);

}}
