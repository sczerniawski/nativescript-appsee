import { WebView } from "tns-core-modules/ui/web-view";
import { View } from "tns-core-modules/ui/core/view";

declare let Appsee: any;

/* Starting and stopping Appsee monitoring */
export function setDebug(log: boolean): void {
    console.log("Enabling NSLog debugging for Appsee");
    Appsee.setDebugToNSLog(log);
}
export function start(apiKey: string): void {
    console.log("Starting Appsee monitoring...");
    Appsee.start(apiKey);
}

/* Marking views as sensitive */
export function markViewAsSensitive(view: View): void {
    console.log("Marking view as sensitive in Appsee");
    Appsee.markViewAsSensitive(view.ios);
}
export function unmarkViewAsSensitive(view: View): void {
    console.log("Unmarking view as sensitive in Appsee");
    Appsee.unmarkViewAsSensitive(view.ios);
}


/* Labeling events and views in Appsee */
export function startScreen(screenName: string): void {
    console.log("Starting Appsee screen: " + screenName);
    Appsee.startScreen(screenName);
}
export function setUserId(userId: string): void {
    console.log("Setting user ID to: " + userId);
    Appsee.setUserId(userId);
}
export function setLocationDescription(description: string): void {
    console.log("Setting location description: " + description);
    Appsee.setLocationDescription(description);
}
export function addEvent(eventName: string): void {
    console.log("Adding event without properties: " + eventName);
    Appsee.addEvent(eventName);
}
export function addScreenAction(actionName: string): void {
    console.log("Adding screen action: " + actionName);
    Appsee.addScreenAction(actionName);
}


/* Controlling video recording */
export function stop(): void {
    console.log("Stopping Appsee video recording...");
    Appsee.stop();
}
export function pause(): void {
    console.log("Pausing Appsee video recording...");
    Appsee.pause();
}
export function resume(): void {
    console.log("Resuming Appsee video recording...");
    Appsee.resume();
}


/* Appsee Session Management */
export function finishSession(verifyBackground: boolean, shouldUpload: boolean): void {
    console.log("Terminating current Appsee session");
    Appsee.finishSession(verifyBackground, shouldUpload);
}
export function forceNewSession(): void {
    console.log("Forcing intialization of new Appsee session");
    Appsee.forceNewSession();
}
export function upload(): void {
    console.log("Forcing upload of session");
    Appsee.upload();
}

/* Functions related to managing web views */
export function installJavascriptInterface(wv: WebView): void {
    console.log("Installing JavaScript interface in web view");
    Appsee.installJavascriptInterface(wv.ios);
}
