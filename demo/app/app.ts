import "./bundle-config";
import * as application from 'tns-core-modules/application';
import * as Appsee from 'nativescript-appsee';

let APPSEE_API_KEY = '<YOUR API KEY HERE>';
Appsee.setSkipStartValidation(true);
Appsee.start(APPSEE_API_KEY);

application.start({ moduleName: "main-page" });
