
function addingEventListener() {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
    button.addEventListener('click', clickAlert);
  }
  
  addingEventListener(); // Call the function to bind the event listeners
  