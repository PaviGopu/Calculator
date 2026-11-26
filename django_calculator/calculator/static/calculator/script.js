const textfield = document.getElementById("textfield")

function getelement(text){
    textfield.innerText += text
}

function calculate(){
    textfield.innerText = textfield.innerText.replace("x","*")
    textfield.innerText = textfield.innerText.replace("÷","/")
    let result = eval(textfield.innerText)
    textfield.innerText = result
}

function clearelement(){
    textfield.innerText = "";
}

function deletechar(){
    textfield.innerText = textfield.innerText.slice(0,-1)
}