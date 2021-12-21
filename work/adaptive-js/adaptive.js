"use strict";

(function iife(){
    const labels = {};
    const addButton = document.querySelector(".add-form__submit");
    const inputTextfield = document.querySelector(".label__input");
    const infoLabel = document.querySelector(".info__report");

    disableButton();
    addCount();

    function disableButton(){
        addButton.disabled = !inputTextfield.value;
        inputTextfield.addEventListener("input", function(){
            addButton.disabled = !inputTextfield.value;
        });
    }

    function addCount(){
        addButton.addEventListener("click", function(e){
            e.preventDefault();
            const inputValue = inputTextfield.value;
            labels[inputValue] = 1 + (labels[inputValue] || 0);
            infoLabel.textContent = 'The count for ' + inputValue + ' is ' + labels[inputValue];
        });
    }
})();