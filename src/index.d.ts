import { WebView } from "tns-core-modules/ui/web-view";
import { View } from "tns-core-modules/ui/core/view";

/* Starting and stopping Appsee monitoring */
export function start(apiKey: string): void;
export function setSkipStartValidation(skipStartValidation: boolean): void;

/* Controlling video recording */
export function stop(): void;
export function pause(wv?: WebView): void;
export function resume(wv?: WebView): void;

/* Marking views as sensitive */
export function markViewAsSensitive(view: View): void;
export function unmarkViewAsSensitive(view: View): void;

/* Labeling events and views in Appsee */
export function startScreen(screenName: string, wv?: WebView): void;
export function addEvent(eventName: string, wv?: WebView): void;
export function addScreenAction(actionName: string, wv?: WebView): void;
export function setUserId(userId: string): void;
export function setLocationDescription(description: string): void;

/* Appsee Session Management */
export function finishSession(verifyBackground: boolean, shouldUpload: boolean): void;
export function forceNewSession(): void;
export function upload(): void;

/* Functions related to managing web views */
export function installJavascriptInterface(wv: WebView): void;
export function startScreenWebView(wv: WebView, screenName: string): void;
