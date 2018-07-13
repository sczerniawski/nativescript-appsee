"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toJavaValue(jsValue) {
    var returnVal = null;
    if (jsValue !== null) {
        switch (typeof jsValue) {
            case 'object':
                returnVal = JSON.stringify(jsValue);
                break;
            case 'boolean':
                returnVal = java.lang.Boolean.valueOf(String(jsValue));
                break;
            case "number":
                if (Number(jsValue) === jsValue && jsValue % 1 === 0) {
                    returnVal = java.lang.Integer.valueOf(String(jsValue));
                }
                else {
                    returnVal = java.lang.Double.valueOf(String(jsValue));
                }
                break;
            case "string":
                returnVal = String(jsValue);
                break;
            default:
                console.log("Unhandled type: " + typeof jsValue);
                break;
        }
    }
    return returnVal;
}
function objectToJavaMap(obj) {
    var javaMap = new java.util.HashMap();
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            var value = obj[property];
            if (value === null) {
                javaMap.put(property, null);
            }
            else {
                var javaValue = toJavaValue(value);
                if (javaValue !== null) {
                    javaMap.put(property, javaValue);
                }
            }
        }
    }
    return javaMap;
}
function setDebug(log) {
    console.log("Enabling Logcat debugging for Appsee");
    com.appsee.Appsee.setDebugToLogcat(log);
}
exports.setDebug = setDebug;
function start(apiKey) {
    console.log("Starting Appsee monitoring...");
    com.appsee.Appsee.start(apiKey);
}
exports.start = start;
function markViewAsSensitive(view) {
    console.log("Marking view as sensitive in Appsee");
    com.appsee.Appsee.markViewAsSensitive(view.android);
}
exports.markViewAsSensitive = markViewAsSensitive;
function unmarkViewAsSensitive(view) {
    console.log("Unmarking view as sensitive in Appsee");
    com.appsee.Appsee.unmarkViewAsSensitive(view.android);
}
exports.unmarkViewAsSensitive = unmarkViewAsSensitive;
function startScreen(screenName) {
    console.log("Starting Appsee screen: " + screenName);
    com.appsee.Appsee.startScreen(screenName);
}
exports.startScreen = startScreen;
function setUserId(userId) {
    console.log("Setting user ID to: " + userId);
    com.appsee.Appsee.setUserId(userId);
}
exports.setUserId = setUserId;
function setLocationDescription(description) {
    console.log("Setting location description: " + description);
    com.appsee.Appsee.setLocationDescription(description);
}
exports.setLocationDescription = setLocationDescription;
function addEvent(eventName, properties) {
    if (properties) {
        console.log("Adding event with properties: " + eventName);
        var javaMap = objectToJavaMap(properties);
        com.appsee.Appsee.addEvent(eventName, javaMap);
    }
    else {
        console.log("Adding event without properties: " + eventName);
        com.appsee.Appsee.addEvent(eventName);
    }
}
exports.addEvent = addEvent;
function addScreenAction(actionName) {
    console.log("Adding screen action: " + actionName);
    com.appsee.Appsee.addScreenAction(actionName);
}
exports.addScreenAction = addScreenAction;
function stop() {
    console.log("Stopping Appsee video recording...");
    com.appsee.Appsee.stop();
}
exports.stop = stop;
function pause() {
    console.log("Pausing Appsee video recording...");
    com.appsee.Appsee.pause();
}
exports.pause = pause;
function resume() {
    console.log("Resuming Appsee video recording...");
    com.appsee.Appsee.resume();
}
exports.resume = resume;
function finishSession(verifyBackground, shouldUpload) {
    console.log("Terminating current Appsee session");
    com.appsee.Appsee.finishSession(verifyBackground, shouldUpload);
}
exports.finishSession = finishSession;
function forceNewSession() {
    console.log("Forcing intialization of new Appsee session");
    com.appsee.Appsee.forceNewSession();
}
exports.forceNewSession = forceNewSession;
function upload() {
    console.log("Forcing upload of session");
    com.appsee.Appsee.upload();
}
exports.upload = upload;
function installJavascriptInterface(wv) {
    console.log("Installing JavaScript interface in web view");
    com.appsee.Appsee.installJavascriptInterface(wv.android);
}
exports.installJavascriptInterface = installJavascriptInterface;
