let inputName = document.getElementById("input-name");
let inputId = document.getElementById("input-id");
let inputdrink = document.getElementById("input-drink");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", POSTMakeOrder);


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
