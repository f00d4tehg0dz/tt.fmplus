
function clickDark(e) {
  if(document.getElementById("click-dark").checked == true) {
    // execute the content script
    chrome.runtime.sendMessage({directive: "popup-dark"}, function(response) {
      this.close(); // close the popup when the background finishes processing request
    });
  } else {
  
  }
 
}

function clickLight(e) {
  if(document.getElementById("click-light").checked == true) {
    
    chrome.runtime.sendMessage({directive: "popup-light"}, function(response) {
      this.close(); // close the popup when the background finishes processing request
  });
  }else {
  
  }
  
}


function clickDisco(e) {
  if(document.getElementById("click-disco").checked == true) {
    // execute the content script
    chrome.runtime.sendMessage({directive: "popup-disco"}, function(response) {
      this.close(); // close the popup when the background finishes processing request
    });
  } else {
  
  }
 
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('click-dark').addEventListener('click', clickDark);
  document.getElementById('click-light').addEventListener('click', clickLight);
  document.getElementById('click-disco').addEventListener('click', clickDisco);
})