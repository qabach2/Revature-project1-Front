let allMakeOrder = document.getElementById("all-order");

let inputName = document.getElementById("input-name");
let inputId = document.getElementById("input-id");
let inputdrink = document.getElementById("input-drink");
let submitButton = document.getElementById("submitButton");

let inputNameDelete = document.getElementById("inputNameDelete");
let removeOrder = document.getElementById("removeOrder");

let getOrderName =document.getElementById("input-name-get");
let getOrder = document.getElementById("get-order");

 let orderList =document.getElementById("orderList");
 
 let allOrder = document.getElementById("all-order");

 let orderListGet =document.getElementById("orderListGet");


allMakeOrder.addEventListener("click", GETallMakeOrder);
submitButton.addEventListener("click", POSTMakeOrder);
getOrder.addEventListener("click", GETMakeOrderByName);
removeOrder.addEventListener("click",DELETEMakeOrder );



// ========TO GET ALL MAKE ORDER=======

async function GETallMakeOrder(){
    let response = await fetch("http://localhost:9000/allMakeOrder");
    response =await response.json();
    console.log(response);
    loadallMakeOrder(response);
     }
function loadallMakeOrder(response){
    // console.log(response);
    orderList.innerHTML = "";
    for(let i=0; i<response.length; i++){
        let newItem =document.createElement("li");
        newItem.innerHTML="Id: " +response[i].Customer_Id + "  Name: " + response[i].Customer_Name + " Order: "+ response[i].Drink_Name;
        orderList.appendChild(newItem) ;
    }
       }

// ========TO MAKE  NEW ORDER=======

async function POSTMakeOrder(){
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
    GETallMakeOrder();
}
orderForm.innerHTML = "";


//============================ Delete Order====================

async function DELETEMakeOrder(){
      let response = await fetch("http://localhost:9000/MakeOrder/Customer_Name/"+inputNameDelete.value, {
         method:'DELETE'});
    }
    
 // ========TO GET NEW MAKE ORDER=======
 async function GETMakeOrderByName(){
    let name =getOrderName.value;
    let response = await fetch("http://localhost:9000/MakeOrder/Customer_Name/"+name);
    response = await response.json();
    
    console.log(response);
}
async function loadallMakeOrderByName(response){
    content.innerHTML = "";
    console.log(response);

    orderListGet.innerHTML = "";
    for(let i=0; i<response.length; i++){
        let newItemGet =document.createElement("li");
        newItemGet.innerHTML= " Order: "+ response[i].Drink_Name;
        orderList.appendChild(newItemGet) ;
    }
}



