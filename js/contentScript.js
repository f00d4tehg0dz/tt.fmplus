const AutoLike = () => {
  let options = { bubbles: true, cancelable: true, view: window }
      
  // check for button press
  let awesomebtn = document.getElementsByClassName('awesome-button')[0]
  if (!awesomebtn || awesomebtn.classList.contains('selected')) return
  var LoopTimerID = setInterval(loopTimer, 1000);
  
  function loopTimer() {
  //   const timeFrame = [];
  //   startTime = (document.querySelectorAll('div.songboard-time'));
  //   [].forEach.call(startTime, function(data) {
  //     const timeFrameInner = data.innerHTML;
  //     timeFrame.push(timeFrameInner);
  //   });
  //   var playerstate = timeFrame[0]
  //   console.log('loopTimer', playerstate)
    // if ((playerstate > '0:00') && (playerstate < '0:30')) {
      let playing = document.getElementsByClassName('room-view-board')[0]
      if (!playing || !playing.classList.contains('song-playing')) return
    
      let clicked = new MouseEvent('click', options)
      return !awesomebtn.dispatchEvent(clicked), clearInterval(LoopTimerID);
    }
}

const WhatMode = () => {
  var colormode;
  colormode = document.createElement('style')
  colormode.id = "colormode";
  document.body.appendChild(colormode);
}

const AutoLikeLoopTimer = () => {
  setInterval(AutoLike, 5000);
}
