let item = document.getElementById("userinput");
let button = document.getElementById("enter");
let list = document.querySelector("ul");

function inputLength (){
    return item.value.length;
}

function addItems(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    list.appendChild(li);
    item.value = "";
} 

function addListAfterClick(){
    if( inputLength() > 0){
        addItems();
    }
}
function addListAfterKeypress(event) {
    if(event.keyCode === 13 && inputLength()>0){
        addItems();
    }
}

button.addEventListener("click" , addListAfterClick);
button.addEventListener("keypress" , addListAfterKeypress);