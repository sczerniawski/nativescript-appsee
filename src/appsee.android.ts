/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
import { WebView } from "tns-core-modules/ui/web-view";
import { View } from "tns-core-modules/ui/core/view";

declare let com: any;

/* Helper functions */
function toJavaValue(jsValue: any) {
    let returnVal = null;

    // Convert the JavaScript type into the appropriate Java type
    if(jsValue !== null) {
        switch(typeof jsValue) {
            case 'object':
                returnVal = JSON.stringify(jsValue);
                break;
            case 'boolean':
                returnVal = java.lang.Boolean.valueOf(String(jsValue));
                break;
            case "number":
                if(Number(jsValue) === jsValue && jsValue % 1 === 0) {
                    returnVal = java.lang.Integer.valueOf(String(jsValue));
                } else {
                    returnVal = java.lang.Double.valueOf(String(jsValue));
                }
                break;
            case "string":
                returnVal = String(jsValue);
                break;
            default:
                console.log(`Unhandled type: ${typeof jsValue}`);
                break;
        }
    }

    return returnVal;
}

function objectToJavaMap(obj: object) {
    let javaMap = new java.util.HashMap<String, Object>();

    for (const property in obj) {
        if(obj.hasOwnProperty(property)) {
            let value = obj[property];

            if(value === null) {
                javaMap.put(property, null);
            } else {
                let javaValue = toJavaValue(value);
                if(javaValue !== null) {
                    javaMap.put(property, javaValue);
                }
            }
        }
    }

    return javaMap;
}

/* Starting and stopping Appsee monitoring */
export function setDebug(log: boolean): void {
    console.log("Enabling Logcat debugging for Appsee");
    com.appsee.Appsee.setDebugToLogcat(log);
}
export function start(apiKey: string): void {
    console.log("Starting Appsee monitoring...");
    com.appsee.Appsee.start(apiKey);
}


/* Marking views as sensitive */
export function markViewAsSensitive(view: View): void {
    console.log("Marking view as sensitive in Appsee");
    com.appsee.Appsee.markViewAsSensitive(view.android);
}
export function unmarkViewAsSensitive(view: View): void {
    console.log("Unmarking view as sensitive in Appsee");
    com.appsee.Appsee.unmarkViewAsSensitive(view.android);
}


/* Labeling events and views in Appsee */
export function startScreen(screenName: string): void {
    console.log("Starting Appsee screen: " + screenName);
    com.appsee.Appsee.startScreen(screenName);
}
export function setUserId(userId: string): void {
    console.log("Setting user ID to: " + userId);
    com.appsee.Appsee.setUserId(userId);
}
export function setLocationDescription(description: string): void {
    console.log("Setting location description: " + description);
    com.appsee.Appsee.setLocationDescription(description);
}
export function addEvent(eventName: string, properties?: object): void {
    if(properties) {
        console.log("Adding event with properties: " + eventName);
        let javaMap = objectToJavaMap(properties);
        com.appsee.Appsee.addEvent(eventName, javaMap);
    } else {
        console.log("Adding event without properties: " + eventName);
        com.appsee.Appsee.addEvent(eventName);
    }
}
export function addScreenAction(actionName: string): void {
    console.log("Adding screen action: " + actionName);
    com.appsee.Appsee.addScreenAction(actionName);
}


/* Controlling video recording */
export function stop(): void {
    console.log("Stopping Appsee video recording...");
    com.appsee.Appsee.stop();
}
export function pause(): void {
    console.log("Pausing Appsee video recording...");
    com.appsee.Appsee.pause();
}
export function resume(): void {
    console.log("Resuming Appsee video recording...");
    com.appsee.Appsee.resume();
}


/* Appsee Session Management */
export function finishSession(verifyBackground: boolean, shouldUpload: boolean): void {
    console.log("Terminating current Appsee session");
    com.appsee.Appsee.finishSession(verifyBackground, shouldUpload);
}
export function forceNewSession(): void {
    console.log("Forcing intialization of new Appsee session");
    com.appsee.Appsee.forceNewSession();
}

export function upload(): void {
    console.log("Forcing upload of session");
    com.appsee.Appsee.upload();
}

/* Functions related to managing web views */
export function installJavascriptInterface(wv: WebView): void {
    console.log("Installing JavaScript interface in web view");
    com.appsee.Appsee.installJavascriptInterface(wv.android);
}
