let output = document.getElementById("finl")
function display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value)
    }
    catch(err){
        alert("Enter the valid input")
    }
}
function Clear(){
    output.value = ""
}
function del(){
    output.value = output.value.slice(0,-1)
}
window.addEventListener("keydown",move);

function move(event){
    switch(event.key){
        case "Enter":
            calculate();
            break;
        case "Delete":
            Clear();
            break; 
        case "BackSpace":
            del()
            break;       
    }
}