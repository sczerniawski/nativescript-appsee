import { Observable } from 'tns-core-modules/data/observable';
import * as Appsee from 'nativescript-appsee';

let APPSEE_API_KEY = 'YOUR_API_KEY_HERE';

export class HelloWorldModel extends Observable {
    constructor() {
        super();
        Appsee.setSkipStartValidation(true);
        Appsee.start(APPSEE_API_KEY);
    }
}
