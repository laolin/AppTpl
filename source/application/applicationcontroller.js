APP.applicationController = (function () {
    'use strict';
 
    function start(resources) {
 
        // Inject CSS into the DOM
        $("head").append("<style>" + resources.css + "</style>");
 
        // Create app elements
        $("body").html('<div id="window"><div id="header"><h1>My Sites</h1></div><div id="body">Hello World 123!</div>');
 
        // Remove our loading splash screen
        //$("#loading").remove();
 
    }
 
    return {
        start: start
    };
}());