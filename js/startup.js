(() => {
    // if Images change on DOM then set autolike
    // let observer = new MutationObserver(mutations => {
    //     for(let mutation of mutations) {
    //          for(let addedNode of mutation.addedNodes) {
    //              if (addedNode.nodeName === "IMG") {
    //                 setTimeout(AutoLike(), 1000);
    //                 AutoLike()
    //                 // console.log("Inserted image", addedNode);
    //               }
    //           }
    //      }
    //   });
    //   observer.observe(document, { childList: true, subtree: true });
    
      AutoLike() // init auto like
      AutoLikeLoopTimer() // loop auto like until its done
      WhatMode() // init color mode
    //  
})()