//This Function is use to display messages through alert by clicking in element
//let namasteyBtn = Document.querySelector('button');
//namasteyBtn.addEventListener('click', showMsg);

//function ok() {
//  alert("Good Night Guyzzzz");}

//This function 
let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('Enter Name of Student');
    namasteBtn.textContent = 'Roll No. 1:' + name;
}