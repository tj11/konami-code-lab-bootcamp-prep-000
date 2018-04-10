const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  //Keep track of index outside of the event handler.
  let index = 0;
  
  body=document.body
  
  //This is the function evoked by the event listener.
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    
    if (key === code[index]) {
      index++;
      
      if (index === code.length) {
        window.alert("You cracked the code!");
        
        index = 0;
      }
    } else {
      index = 0;
    }
  }

}