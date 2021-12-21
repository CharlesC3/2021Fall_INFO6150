"use strict";

success();

function success() {
  if(document.querySelectorAll(".label__input").value==="") { 
           document.getElementById('submit').disabled = true; 
       } else { 
           document.getElementById('submit').disabled = false;
       }
   }