
let hotbutton = document.getElementById('btn-hot');
let icedbutton = document.getElementById('btn-iced');

hotbutton.addEventListener("click", GetHotDrinks);
icedbutton.addEventListener("click",GetIcedDrinks);
async function GetHotDrinks(){
    let response = await fetch("http://localhost:9000/allHotDrinks");
    response =await response.json();
    console.log(response);
    loadallHotDrinks(response);
    
}
function loadallHotDrinks(response){
    console.log(response);
}

async function GetIcedDrinks(){
    let response = await fetch("http://localhost:9000/allIcedDrinks");
    response =await response.json();
    console.log(response);
    loadallIcedDrinks(response);
    
}
function loadallIcedDrinks(response){
    console.log(response);
}
