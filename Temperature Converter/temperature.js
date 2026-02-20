const input = document.getElementById("tempInput");
const select = document.getElementById("conversionType");
const button = document.getElementById("convertBtn");
let display = document.getElementById("result");

function convert() {
    let get = select.value;
    let num = Number(input.value);
    if (get === "cToF"){
        input.value = "";
        display.textContent = (num * 9/5) +32;
    } else if (get === "fToC"){
        input.value = "";
        display.textContent = (num - 32) * 5/9;
    } else if (get === "cToK"){
        input.value = "";
        display.textContent = num + 273;
    } else if (get === "kToC"){
        input.value = "";
        display.textContent = num - 273;
    } else {
        input.value = "";
        display.textContent = "Something went wrong!";
    }
}

button.addEventListener("click", function(){
    convert();
});


