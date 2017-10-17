import { WebView } from "tns-core-modules/ui/web-view";
import { View } from "tns-core-modules/ui/core/view";

declare let com: any;

/* Starting and stopping Appsee monitoring */
export function start(apiKey: string): void {
    console.log("Starting Appsee monitoring...");
    com.appsee.Appsee.start(apiKey);
}
export function setSkipStartValidation(skipStartValidation: boolean): void {
    console.log("Setting skipStartValidation to: " + skipStartValidation);
    com.appsee.Appsee.setSkipStartValidation(skipStartValidation);
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
export function addEvent(eventName: string): void {
    console.log("Adding event without properties: " + eventName);
    com.appsee.Appsee.addEvent(eventName);
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
export function startScreenWebView(wv: WebView, screenName: string): void {
    console.log("Setting screen name for web view");
    wv.android.loadUrl(`javascript:Appsee.startScreen("${screenName}");`);
}
