const submitButton = document.documentElement.querySelector("#submit");
const items = document.documentElement.querySelectorAll(".item");
const screenDisplay = document.documentElement.querySelector("#display");
let clear = false;

const regex = /^[0-9+\-*/ ]+$/ // também é possível implementar .() também

Array.from(items).forEach((item) => {
    item.addEventListener("click", () => {
        if(item.id === "submit"){
            calculate();
        } else{
            updateDisplay(item.textContent);
        }
    });
});

function updateDisplay(value){
    if(clear){
        screenDisplay.textContent = "";
        clear = false;
    }

    screenDisplay.textContent += value;
}

function calculate(){
    screenDisplay.textContent

    if(!regex.test(screenDisplay.textContent)){
        screenDisplay.textContent = "Error! Invalid values!";
        return;
    }
    
    try{
        const result = eval(screenDisplay.textContent);
        screenDisplay.textContent = result;
    } catch{
        screenDisplay.textContent = "Error!";
    } finally{
        clear = true;
    }
}