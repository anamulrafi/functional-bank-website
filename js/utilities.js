function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    if(isNaN(inputId)){
        alert('Please Provide Valid Number');
        return;
     }
    return inputFieldValue;
    
 }
 function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText; 
    const value = parseFloat(elementValueString);
    return value;
 }
 function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerHTML = newValue;
 }