/// <reference path="node_modules/tns-platform-declarations/ios.d.ts" />
import { WebView } from "tns-core-modules/ui/web-view";
import { View } from "tns-core-modules/ui/core/view";
export declare function setDebug(log: boolean): void;
export declare function start(apiKey: string): void;
export declare function markViewAsSensitive(view: View): void;
export declare function unmarkViewAsSensitive(view: View): void;
export declare function startScreen(screenName: string): void;
export declare function setUserId(userId: string): void;
export declare function setLocationDescription(description: string): void;
export declare function addEvent(eventName: string, properties?: object): void;
export declare function addScreenAction(actionName: string): void;
export declare function stop(): void;
export declare function pause(): void;
export declare function resume(): void;
export declare function finishSession(verifyBackground: boolean, shouldUpload: boolean): void;
export declare function forceNewSession(): void;
export declare function upload(): void;
export declare function installJavascriptInterface(wv: WebView): void;
