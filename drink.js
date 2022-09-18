
let hotbutton = document.getElementById('btn-hot');
let icedbutton = document.getElementById('btn-iced');

let listHot = document.getElementById("listHot");
let listIced = document.getElementById("listIced");


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

    listHot.innerHTML="";
    for(let i=0; i<response.length; i++){
        let newHot =document.createElement("li");
        newHot.innerHTML= response[i].name;
        listHot.appendChild(newHot) ;
    } 
    
}

async function GetIcedDrinks(){
    let response = await fetch("http://localhost:9000/allIcedDrinks");
    response =await response.json();
    console.log(response);
    loadallIcedDrinks(response);
    
}

function loadallIcedDrinks(response){
    console.log(response);
    listIced.innerHTML="";
    for(let i=0; i<response.length; i++){
        let newIced =document.createElement("li");
        newIced.innerHTML=  response[i].name_of_coffee;
        listIced.appendChild(newIced) ;
    }
   
} 











