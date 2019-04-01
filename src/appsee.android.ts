/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
import { WebView } from "tns-core-modules/ui/web-view";
import { View } from "tns-core-modules/ui/core/view";

declare let com: any;

// Alias the actual package to an internal variable
const Appsee: any = com.appsee.Appsee;

let packageExists = true;
if (typeof Appsee === "undefined" || !Appsee) {
    packageExists = false;
    console.error("Appsee plugin is not installed correctly!!!");
}

/* Helper functions */
function toJavaValue(jsValue: any) {
    let returnVal = null;

    // Convert the JavaScript type into the appropriate Java type
    if (jsValue !== null) {
        switch (typeof jsValue) {
            case "object":
                returnVal = JSON.stringify(jsValue);
                break;
            case "boolean":
                returnVal = java.lang.Boolean.valueOf(String(jsValue));
                break;
            case "number":
                if (Number(jsValue) === jsValue && jsValue % 1 === 0) {
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
        if (obj.hasOwnProperty(property)) {
            let value = obj[property];

            if (value === null) {
                javaMap.put(property, null);
            } else {
                let javaValue = toJavaValue(value);
                if (javaValue !== null) {
                    javaMap.put(property, javaValue);
                }
            }
        }
    }

    return javaMap;
}

/* Starting and stopping Appsee monitoring */
export function setDebug(log: boolean): void {
    if (!packageExists) {
        return;
    }

    console.log("Enabling Logcat debugging for Appsee");
    Appsee.setDebugToLogcat(log);
}
export function start(apiKey: string): void {
    if (!packageExists) {
        return;
    }

    console.log("Starting Appsee monitoring...");
    Appsee.start(apiKey);
}

/* Marking views as sensitive */
export function markViewAsSensitive(view: View): void {
    if (!packageExists) {
        return;
    }

    console.log("Marking view as sensitive in Appsee");
    Appsee.markViewAsSensitive(view.android);
}
export function unmarkViewAsSensitive(view: View): void {
    if (!packageExists) {
        return;
    }

    console.log("Unmarking view as sensitive in Appsee");
    Appsee.unmarkViewAsSensitive(view.android);
}

/* Labeling events and views in Appsee */
export function startScreen(screenName: string): void {
    if (!packageExists) {
        return;
    }

    console.log("Starting Appsee screen: " + screenName);
    Appsee.startScreen(screenName);
}
export function setUserId(userId: string): void {
    if (!packageExists) {
        return;
    }

    console.log("Setting user ID to: " + userId);
    Appsee.setUserId(userId);
}
export function setLocationDescription(description: string): void {
    if (!packageExists) {
        return;
    }

    console.log("Setting location description: " + description);
    Appsee.setLocationDescription(description);
}
export function addEvent(eventName: string, properties?: object): void {
    if (!packageExists) {
        return;
    }

    if (properties) {
        console.log("Adding event with properties: " + eventName);
        let javaMap = objectToJavaMap(properties);
        Appsee.addEvent(eventName, javaMap);
    } else {
        console.log("Adding event without properties: " + eventName);
        Appsee.addEvent(eventName);
    }
}
export function addScreenAction(actionName: string): void {
    if (!packageExists) {
        return;
    }

    console.log("Adding screen action: " + actionName);
    Appsee.addScreenAction(actionName);
}

/* Controlling video recording */
export function stop(): void {
    if (!packageExists) {
        return;
    }

    console.log("Stopping Appsee video recording...");
    Appsee.stop();
}
export function pause(): void {
    if (!packageExists) {
        return;
    }

    console.log("Pausing Appsee video recording...");
    Appsee.pause();
}
export function resume(): void {
    if (!packageExists) {
        return;
    }

    console.log("Resuming Appsee video recording...");
    Appsee.resume();
}

/* Appsee Session Management */
export function finishSession(
    verifyBackground: boolean,
    shouldUpload: boolean
): void {
    if (!packageExists) {
        return;
    }

    console.log("Terminating current Appsee session");
    Appsee.finishSession(verifyBackground, shouldUpload);
}
export function forceNewSession(): void {
    if (!packageExists) {
        return;
    }

    console.log("Forcing intialization of new Appsee session");
    Appsee.forceNewSession();
}

export function upload(): void {
    if (!packageExists) {
        return;
    }

    console.log("Forcing upload of session");
    Appsee.upload();
}

/* Functions related to managing web views */
export function installJavascriptInterface(wv: WebView): void {
    if (!packageExists) {
        return;
    }

    console.log("Installing JavaScript interface in web view");
    Appsee.installJavascriptInterface(wv.android);
}
