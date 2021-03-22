LightMode = () => {
  var createStyle = function (name) {
    var style;
    if (!document.getElementById(name)) {
      // alert("Element does not exist. Let's create it.");
      localStorage.currentState=name;
    }
    else { 
      // alert("Element exists. Lets remove it");
      style = document.getElementById('colormode');
      style.textContent = LightTheme;
      localStorage.currentState="";
    }
  };
  createStyle("colormode");
}

LightTheme = `
  .room-name,
  .filter.btn,
  .song .title,
  .chat .messages,
  .room-info-wrap,
  .panel-button .text,
  .tabbed-panel .separator,
  .room-tab .room-info-link h3,
  .message-view .message-fragment,
  .message-view .message-username {
    color: #666 !important;
  }

  .room-info-intro {
    color: #282828; !important;
  }

  #songs,
  .tab-pane,
  .message-history,
  .chat .message:nth-child(odd),
  .striped-list>:nth-child(odd):not(.separator), 
  .song-list>ul>:nth-child(odd):not(.separator),
  .message-history>:nth-child(odd):not(.separator) {
    background: #f0f0f0; !important;
  }

  .flat-button,
  .room-info-wrap,
  .chat .message:nth-child(even),
  .striped-list>:nth-child(even):not(.separator), 
  .song-list>ul>:nth-child(even):not(.separator),
  .message-history>:nth-child(even):not(.separator) { 
    background: #fff !important;
  }

  .message-input-view,
  .floating-panel-bar,
  .floating-panel-header, 
  .tabbed-panel .separator {
    border-top: 1px solid #fff !important;
    border-bottom: 1px solid #999 !important;
    background-image: linear-gradient(to bottom,#eee,#ccc);
  }

  .panel-button {
    background-image: linear-gradient(rgb(230, 230, 230) 0px, rgb(198, 198, 198) 100%) !important;
  }

  .flat-button,
  .panel-button,
  .chat .message,
  .room-info-wrap,
  .striped-list>*, 
  .song-list>ul>*,
  .room-info-intro,
  .message-history > * {
    border-color: #bbb !important;
  }

  .panel-button,
  .queue-message,
  .room-info-wrap,
  .default-message,
  .panel-button .text,
  .message-input-view,
  .floating-panel-bar,
  .floating-panel-header, 
  .tabbed-panel .separator {
    box-shadow: inset 0 1px #f9f9f9, 0 1px #f9f9f9; !important;
    text-shadow: none !important;
  }

  .floating-panel-bar .divider,
  .floating-panel-header .divider {
    box-shadow: inset 1px 0 0 0 #999, inset -1px 0 0 0 #fff; !important;
  }

  .options-menu .nib {
    filter: none !important;
  }
`
LightMode()