"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toIOSValue(jsValue) {
    var returnVal = "null";
    if (jsValue !== null) {
        switch (typeof jsValue) {
            case 'object':
                returnVal = JSON.stringify(jsValue);
                break;
            case 'boolean':
            case "number":
            case "string":
                returnVal = jsValue;
                break;
            default:
                console.log("Unhandled type: " + typeof jsValue);
                break;
        }
    }
    return returnVal;
}
function toNSDictionary(obj) {
    var iosDictionary = NSMutableDictionary.new();
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            var value = obj[property];
            if (value === null || value === undefined) {
                iosDictionary.setObjectForKey('null', property);
            }
            else {
                iosDictionary.setObjectForKey(toIOSValue(value), property);
            }
        }
    }
    return iosDictionary;
}
function setDebug(log) {
    console.log("Enabling NSLog debugging for Appsee");
    Appsee.setDebugToNSLog(log);
}
exports.setDebug = setDebug;
function start(apiKey) {
    console.log("Starting Appsee monitoring...");
    Appsee.start(apiKey);
}
exports.start = start;
function markViewAsSensitive(view) {
    console.log("Marking view as sensitive in Appsee");
    Appsee.markViewAsSensitive(view.ios);
}
exports.markViewAsSensitive = markViewAsSensitive;
function unmarkViewAsSensitive(view) {
    console.log("Unmarking view as sensitive in Appsee");
    Appsee.unmarkViewAsSensitive(view.ios);
}
exports.unmarkViewAsSensitive = unmarkViewAsSensitive;
function startScreen(screenName) {
    console.log("Starting Appsee screen: " + screenName);
    Appsee.startScreen(screenName);
}
exports.startScreen = startScreen;
function setUserId(userId) {
    console.log("Setting user ID to: " + userId);
    Appsee.setUserId(userId);
}
exports.setUserId = setUserId;
function setLocationDescription(description) {
    console.log("Setting location description: " + description);
    Appsee.setLocationDescription(description);
}
exports.setLocationDescription = setLocationDescription;
function addEvent(eventName, properties) {
    if (properties) {
        console.log("Adding event with properties: " + eventName);
        Appsee.addEventWithProperties(eventName, toNSDictionary(properties));
    }
    else {
        console.log("Adding event without properties: " + eventName);
        Appsee.addEvent(eventName);
    }
}
exports.addEvent = addEvent;
function addScreenAction(actionName) {
    console.log("Adding screen action: " + actionName);
    Appsee.addScreenAction(actionName);
}
exports.addScreenAction = addScreenAction;
function stop() {
    console.log("Stopping Appsee video recording...");
    Appsee.stop();
}
exports.stop = stop;
function pause() {
    console.log("Pausing Appsee video recording...");
    Appsee.pause();
}
exports.pause = pause;
function resume() {
    console.log("Resuming Appsee video recording...");
    Appsee.resume();
}
exports.resume = resume;
function finishSession(verifyBackground, shouldUpload) {
    console.log("Terminating current Appsee session");
    Appsee.finishSession(verifyBackground, shouldUpload);
}
exports.finishSession = finishSession;
function forceNewSession() {
    console.log("Forcing intialization of new Appsee session");
    Appsee.forceNewSession();
}
exports.forceNewSession = forceNewSession;
function upload() {
    console.log("Forcing upload of session");
    Appsee.upload();
}
exports.upload = upload;
function installJavascriptInterface(wv) {
    console.log("Installing JavaScript interface in web view");
    Appsee.installJavascriptInterface(wv.ios);
}
exports.installJavascriptInterface = installJavascriptInterface;
