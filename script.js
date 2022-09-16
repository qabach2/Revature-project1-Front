
// let hotbutton = document.getElementById('btn-hot');
// let icedbutton = document.getElementById('btn-iced');

let inputName = document.getElementById("input-name");
let inputId = document.getElementById("input-id");
let inputdrink = document.getElementById("input-drink");
let submitButton = document.getElementById("submitButton");

// hotbutton.addEventListener("click", GetHotDrinks);
// icedbutton.addEventListener("click",GetIcedDrinks);


submitButton.addEventListener("click", apiPostMakeOrder);

// async function GetHotDrinks(){
//     let response = await fetch("http://localhost:9000/allHotDrinks");
//     response =await response.json();
//     console.log(response);
//     loadallHotDrinks(response);
    
// }
// function loadallHotDrinks(response){
//     console.log(response);
// }

// async function GetIcedDrinks(){
//     let response = await fetch("http://localhost:9000/allIcedDrinks");
//     response =await response.json();
//     console.log(response);
//     loadallIcedDrinks(response);
    
// }
// function loadallIcedDrinks(response){
//     console.log(response);
// }
// async function loadPaintings(response){
//     content.innerHTML = "";
//     console.log(response)
//     let paintingList = document.createElement("ul");
    
//   
//======================= Add Order====================================
// async function GetMakeOrder(){
//     let response = await fetch("http://localhost:9000/allMakeOrder");
//     response =await response.json();
//     console.log(response);
//     loadMakeOrder(response);
    
// }
// function loadMakeOrder(response){
//     console.log(response);
// }

async function apiPostMakeOrder(){
    let inputMakeOrder = {
        Customer_Name:inputName.value,
       Customer_Id:inputId.value,
        Drink_Name:inputdrink.value
    }
    let response = await fetch("http://localhost:9000/MakeOrder", {
        method:'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json'
            
          },
        body:JSON.stringify(inputMakeOrder)
    });
    
}