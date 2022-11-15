let arrayspesa = ["pane", "latte", "vino", "sale", "pasta", "manzo"];

for (let i = 0; i < arrayspesa.length; i++) {
    console.log(arrayspesa[i]);
    
};

let i = 0 
while (i < arrayspesa.length){
    console.log(arrayspesa[i])
    document.getElementById("listanonordinata").innerHTML += "<li>" + arrayspesa[i] + "</li>";
    i++
};







