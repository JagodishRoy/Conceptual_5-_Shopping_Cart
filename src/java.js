// dinamic serial 
let serial = 0;


// first_Card 
document.getElementById('firstCard').addEventListener('click', function(){
    serial = serial + 1;
    // get data from html file 
    const productName = document.getElementById('firsName').innerText;
    const productPrice = document.getElementById('firstPrice').innerText;
    const productQuantity = document.getElementById('firstQuantity').innerText;
    const totalPrice = parseInt(productPrice)*parseInt(productQuantity);
    // console.log(productPrice, typeof productPrice);
    // Show data using dom manupulation 
    displayData(productName,productPrice,productQuantity,totalPrice);
    disabledButton('firstCard');
})

// second_Card
document.getElementById('secondCard').addEventListener('click', function(e){
    serial += 1;
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const pTotal = parseInt(pPrice)+ parseInt(pQuantity);
    displayData(pName,pPrice,pQuantity,pTotal);
    disabledButton('secondCard');
})

// Third_card 
document.getElementById('thirdCard').addEventListener('click', function(){
    serial = serial + 1;
    const thirdName = document.getElementById('thirdName').innerText;
    const thirdPrice = document.getElementById('thirdPrice').innerText;
    const thirdQuantity = document.getElementById('thirdQuantity').innerText;
    const thirdTotal = parseInt(thirdPrice) - parseInt(thirdQuantity);
    displayData(thirdName, thirdPrice, thirdQuantity,thirdTotal);
    disabledButton('thirdCard')
})

// fouth_Card 
document.getElementById('fourthCard').addEventListener('click', function(e){
    serial += 1;
    const fourthName = e.target.parentNode.parentNode.children[0].innerText;
    const fouthPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const fouthQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const fourthPrice = parseInt(fouthPrice)/parseInt(fouthQuantity);
    // console.log(e.target.parentNode.parentNode.children[3].children[0].innerText);
    displayData(fourthName, fouthPrice, fouthQuantity, fourthPrice)
    disabledButton('fourthCard')
})

// fifth_card 
document.getElementById('fifthButton').addEventListener('click', function(){
    serial = serial + 1;
    const fifthName = document.getElementById('fifthName').innerText;
    const fifthPrice = document.getElementById('fifthPrice').value;
    const fifthQuantity = document.getElementById('fifthQuantity').value;
    const fifthTotal = parseInt(fifthPrice) * parseInt(fifthQuantity);
    if(fifthPrice==''|| fifthQuantity==''|| fifthPrice <0 ||fifthQuantity<0 ){
        alert('Please enter valid number')
    }
        // console.log(fifthName, fifthPrice, fifthQuantity, fifthTotal)
    displayData(fifthName, fifthPrice, fifthQuantity, fifthTotal)
    disabledButton('fifthButton');
})

// Common function for display data 
function displayData(productName,productPrice,productQuantity,totalPrice){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${totalPrice}</td>
    `;
    container.appendChild(tr);
}

// Common function for displayButton disabled 
function disabledButton(id){
    document.getElementById(id).setAttribute('disabled', true);
}