import { WebView } from "tns-core-modules/ui/web-view";
import { View } from "tns-core-modules/ui/core/view";

declare let Appsee: any;

function callAppseeWebViewFunction(wv: WebView, functionName: string, ...args: any[]) {
	// Build the function arguments
	let functionArguments: any[] = [];
	for (var i = 0; i < args.length; i++) {
		let arg = args[i];

        // Handle all of the type conversions to encode these in JavaScript
		if (typeof arg == 'string') {
			functionArguments.push(JSON.stringify(arg));
		} else if(typeof arg == 'number') {
			functionArguments.push(arg);
		} else if (typeof arg == 'object') {
			functionArguments.push(`'${JSON.stringify(arg)}'`);
		} else {
			console.log("Unsupported type: " + typeof arg);
		}
	}

    let functionArgumentsString = functionArguments.join(', ');
    let appseeFunctionCall = `Appsee.${functionName}(${functionArgumentsString});`;

    // Call the function
    console.log(`Calling Appsee in iOS WebView: ${appseeFunctionCall}`);
    let functionCallResult = wv.ios.stringByEvaluatingJavaScriptFromString(appseeFunctionCall);

    console.log(`Function call result: ${functionCallResult}`);
}

/* Starting and stopping Appsee monitoring */
export function start(apiKey: string): void {
    console.log("Starting Appsee monitoring...");
    Appsee.start(apiKey);
}
export function setSkipStartValidation(skipStartValidation: boolean): void {
    console.log("The setSkipStartValidation function is not available on iOS");
    return;
}


/* Labeling events and views in Appsee */
export function startScreen(screenName: string, wv?: WebView): void {
    if(wv) {
        callAppseeWebViewFunction(wv, 'startScreen', screenName);
    } else {
        console.log("Starting Appsee screen: " + screenName);
        Appsee.startScreen(screenName);
    }
}
export function setUserId(userId: string): void {
    console.log("Setting user ID to: " + userId);
    Appsee.setUserId(userId);
}
export function setLocationDescription(description: string): void {
    console.log("Setting location description: " + description);
    Appsee.setLocationDescription(description);
}
export function addEvent(eventName: string, wv?: WebView): void {
    if(wv) {
        callAppseeWebViewFunction(wv, 'addEvent', eventName);
    } else {
        console.log("Adding event without properties: " + eventName);
        Appsee.addEvent(eventName);
    }
}
export function addScreenAction(actionName: string, wv?: WebView): void {
    if(wv) {
        callAppseeWebViewFunction(wv, 'addScreenAction', actionName);
    } else {
        console.log("Adding screen action: " + actionName);
        Appsee.addScreenAction(actionName);
    }
}


/* Controlling video recording */
export function stop(): void {
    console.log("Stopping Appsee video recording...");
    Appsee.stop();
}
export function pause(wv?: WebView): void {
    if(wv) {
        callAppseeWebViewFunction(wv, 'pause');
    } else {
        console.log("Pausing Appsee video recording...");
        Appsee.pause();
    }
}
export function resume(wv?: WebView): void {
    if(wv) {
        callAppseeWebViewFunction(wv, 'resume');
    } else {
        console.log("Resuming Appsee video recording...");
        Appsee.resume();
    }
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
export function startScreenWebView(wv: WebView, screenName: string): void {
    console.log("Setting screen name for web view");
    wv.ios.stringByEvaluatingJavaScriptFromString(`Appsee.startScreen("${screenName}");`);
}
