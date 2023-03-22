// Save the reference to text-field into a variable. | <input type="text">
const listinput=document.getElementById('input');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
const addbutton=document.getElementById('button');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
const listitem=document.getElementById('lists');
// Save the reference to paragraph for feedback | <p class="feedback"></p>
const feedback=document.getElementById('feedback');

// Start function addItem.
function addItems() {
    // Create list-item and store output in a variable.
    const addlist=document.createElement('li');
    // Check if user entered the value in input text-field.
    if (listinput.value.trim() !== '') {
    // If so:
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       addlist.textContent=listinput.value;
       // Append list item to unordered list.
       listitem.appendChild(addlist);
       // Clear a feedback-message.
       feedback.textContent='';
       // Clear the text-field.
       listinput.value='';
       // Put the cursor back to text-field  
       listinput.focus();
    // End if. 
    }
    // Otherwise:
    else {
       // Print the message nothing entered in the paragraph "feedback"
       feedback.textContent='Nothing entered!';
    // End otherwise.
    }
// End function addItem.
}
// Register your function addItem for click event on button.
addbutton.addEventListener('click', addItems);
