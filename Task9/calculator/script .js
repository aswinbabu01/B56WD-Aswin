function onclickofButton(event){
    const inputElement = document.getElementById('input');
    inputElement.value = inputElement.value + event.target.textContent;
}

function onSubmit() {
    const inputElement = document.getElementById('input');
    inputElement.value = eval(inputElement.value.replace('x', '*'));
}

function onClear(){
    const inputElement = document.getElementById('input');
    inputElement.value="";
}

function onBackSpace(){
    const inputElement = document.getElementById('input');
    inputElement.value=inputElement.value.substring(0,inputElement.value.length-1)
}

function validateInput(event) {
    var textarea = document.getElementById('input');
    var errorMessage = document.getElementById('error-message');
    var pattern = /^[\d+\-*/().\s]+$/; // Modify the regex pattern as needed
    if (!pattern.test(textarea.textContent)) {
        errorMessage.textContent = '';
        textarea.setCustomValidity('');
    } else {
        // console.log('in')
        textarea.textContent = textarea.textContent.replace(/^[\d+\-*/().\s]+$/, '');      
    }
}

function restrictInput(event) {
    var allowedKeys = /^[0-9+\-*/().\s]|Backspace|Shift|Alt|Tab|NumLock|Control|c$/;
    var key = event.key;

    // Check if the pressed key is allowed
    if (!allowedKeys.test(key)) {
        alert('Only numbers are allowed.');
        event.preventDefault();
    }
}