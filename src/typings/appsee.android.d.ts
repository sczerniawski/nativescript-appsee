/// <reference path="../node_modules/tns-platform-declarations/android.d.ts" />

declare module com {
    export module appsee {
        export class Appsee {
            /* Starting and stopping Appsee monitoring */
            public static setDebugToLogcat(debug: boolean): void;
            public static start(apiKey: string): void;
            public static setSkipStartValidation(skipStartValidation: boolean): void;

            /* Controlling video recording */
            public static stop(): void;
            public static pause(): void;
            public static resume(): void;

            /* Marking views as sensitive */
            public static markViewAsSensitive(view: android.view.View): void;
            public static unmarkViewAsSensitive(view: android.view.View): void;

            /* Labeling events and views in Appsee */
            public static startScreen(screenName: string): void;
            public static setUserId(userId: string): void;
            public static setLocationDescription(description: string): void;
            public static addEvent(eventName: string): void;
            public static addEvent(eventName: string, properties: java.util.Map<String, Object>): void;
            public static addScreenAction(actionName: string): void;

            /* Appsee Session Management */
            public static finishSession(verifyBackground: boolean, shouldUpload: boolean): void;
            public static forceNewSession(): void;
            public static upload(): void;

            /* Functions related to managing web views */
            public static installJavascriptInterface(wv: android.webkit.WebView): void;
        }
    }
}
