/*
 * This file includes all background scripts running while the extension
 * is active.
 */

// The full list of context types can be found here: https://developer.chrome.com/docs/extensions/reference/contextMenus/#type-ContextType
// var bkg = chrome.extension.getBackgroundPage();
// bkg.console.log('foo2');

// const selectionClickHandler = (info, tab) => {
//   window.alert(
//     `Selection context menu item clicked ${
//       !info.selectionText
//         ? "with no selected text!"
//         : `with text "${info.selectionText}"!`
//     }`,
//   );
// };

// const pageClickHandler = (info, tab) => {
//   window.alert("Page context menu item clicked!");
// };

// chrome.contextMenus.create({
//   title: "New Context Menu Item - Page",
//   contexts: ["page"],
//   onclick: pageClickHandler,
// });

// chrome.contextMenus.create({
//   title: "New Context Menu Item - Selection",
//   contexts: ["selection"],
//   onclick: selectionClickHandler,
// });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "popup-dark":
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "js/DarkMode.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;
        case "popup-light":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "js/lightMode.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;    
        case "popup-disco":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "js/discoMode.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;    
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);