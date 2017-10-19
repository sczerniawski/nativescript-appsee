/// <reference path="../node_modules/tns-platform-declarations/ios.d.ts" />

declare class Appsee extends NSObject {
    /* Inherited from NSObject*/
	static alloc(): Appsee;
	static new(): Appsee;


    /* Starting Appsee Monitoring */
	static start(apiKey: string): void;

    /* Adding events */
	static addEvent(eventName: string): void;
	static addEventWithProperties(eventName: string, properties: NSDictionary<any, any>): void;
	static addScreenAction(actionName: string): void;

    /* Controlling session lifetime */
	static finishSessionUpload(verifyBackground: boolean, shouldUpload: boolean): void;
	static forceNewSession(): void;
	static upload(): void;

    /* Controlling video recording */
	static pause(): void;
	static resume(): void;
	static stop(): void;

    /* Interacting with views */
	static startScreen(screenName: string): void;
	static markLayerAsSensitiveInView(layer: CALayer, parentView: UIView): void;
	static unmarkLayerAsSensitiveInView(layer: CALayer, parentView: UIView): void;
	static markViewAsSensitive(view: UIView): void;
	static unmarkViewAsSensitive(view: UIView): void;
	static installJavascriptInterface(webView: UIView): void;

    /* Handling information about the user */
	static getOptOutStatus(): boolean;
	static setOptOutStatus(isOptOut: boolean): void;
	static setUserID(userID: string): void;
	static setLocationDescription(description: string): void;
	static setLocationLongitudeHorizontalAccuracyVerticalAccuracy(
        latitude: number, longitude: number, horizontalAccuracy: number, verticalAccuracy: number
    ): void;

    /* Other included functions */
	static generate3rdPartyIDPersistent(systemName: string, isPersistent: boolean): string;
	static overlayImageInRect(image: UIImage, rect: CGRect): void;
	static setDebugToNSLog(log: boolean): void;
	static setDelegate(delegate: AppseeDelegate): void;
	static set3rdPartyIDForSystemPersistent(
        externalID: string, systemName: string, isPersistent: boolean
    ): void;
}

interface AppseeDelegate extends NSObjectProtocol {
	appseeScreenDetected?(screenName: string): string;
	appseeSessionEnded?(sessionId: string): void;
	appseeSessionEnding?(sessionId: string): boolean;
	appseeSessionStartedVideoRecorded?(sessionId: string, isVideoRecorded: boolean): void;
	appseeSessionStarting?(): boolean;
}

declare var AppseeDelegate: {
	prototype: AppseeDelegate;
};
