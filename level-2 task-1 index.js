// Get all the buttons on the calculator and the display
const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

// Add an event listener to each button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Get the value of the clicked button
    const value = this.innerHTML;
    
    // If the value is 'C', clear the display
    if (value === 'C') {
      display.value = '0';
    } 
    // If the value is 'del', remove the last character from the display
    else if(value === 'del'){
      const x = display.value.substring(0,display.value.length-1);
      display.value = x;
    }
    // If the value is '+/-', change the sign of the number on the display
    else if (value === "+/-") {
      if(display.value!='0') {
        display.value = eval("-" + display.value);
      }
    }
    // If the value is '=', evaluate the expression on the display
    else if (value === '=') {
      display.value = eval(display.value);
    }
    // If the value is 'x', add a multiplication symbol to the display
    else {
      if(value == 'x') {
        if(display.value !='0'){
          display.value += '*'
        }
      }
      // If the display value is 0, replace it with the clicked value
      else if(display.value == '0') {
        display.value = value;
      }
      // If the display value is 0 and the clicked value is an operator, do nothing
      else if(display.value == '0' && value in ('+','-','*','/')) {
        display.value = '0';
      }
      // Otherwise, add the clicked value to the display
      else {
        display.value += value;
      }
    }
  });
}
