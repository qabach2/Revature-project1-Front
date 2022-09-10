let hotbutton = document.getElementById('hot');
let icedbutton = document.getElementById('iced');
hotbutton.onclick = loadAllHotDrinks;
icedbutton.onclick = loadAllIcesDrinks;

function loadAllHotDrinks(){
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:9000/allHotDrinks ");
    request.send();
    request.onreadystatechange = load;

    function load(){
        if(request.readyState == 4 && request.status == 200){
            let responsejson = JSON.parse(request.response);
            console.log(responsejson);
            loadSpan(responsejson);
}
    }
}