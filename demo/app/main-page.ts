import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import * as Appsee from 'nativescript-appsee';
import { HelloWorldModel } from './main-view-model';
import { WebView } from 'tns-core-modules/ui/web-view';
import { isAndroid, isIOS} from "tns-core-modules/platform"

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function webViewLoaded(args): void {
    var wv: WebView = <WebView> args.object;

    if(isAndroid) {
        console.log("Android WebView object: " + wv.android);
    } else if(isIOS) {
        console.log("iOS WebView object: " + wv.ios);
    }

    Appsee.startScreen('mainPage');
    Appsee.addEvent('WebViewLoaded');
    //Appsee.installJavascriptInterface(wv);
    //Appsee.startScreen('TestWebViewScreen', wv);
}
