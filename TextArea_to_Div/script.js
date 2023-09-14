let text = document.getElementById("inputTextArea");
let button = document.getElementById("submitButton");
let div_text = document.getElementById("outputDiv");

button.addEventListener( 'click' , function(e){
    textof_inputTextArea = inputTextArea.value;
    outputDiv.textContent = textof_inputTextArea;
})