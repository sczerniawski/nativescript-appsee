# NativeScript Appsee

This is a plugin for [NativeScript](https://www.nativescript.org/) that allows for easy integration
with the [Appsee app analytics](https://www.appsee.com/) platform.

## Requirements

To use this plugin, you'll need an API key from Appsee analytics.

## Installation

You can install this plugin simply by running the following `tns` command:

```javascript
tns plugin add nativescript-appsee
```

## Usage

Once you have your Appsee API key you can integrate with Appsee using this plugin by adding the
following to your application entry points:

```javascript
import * as application from 'tns-core-modules/application';
import * as Appsee from 'nativescript-appsee';

let APPSEE_API_KEY = '1234-5678-ABCD-EFGH';

application.on(application.launchEvent, function(args) {
    // Appsee.setDebug(true); // Uncomment this line to enable Logcat/NSLog debugging messages
    Appsee.start(APPSEE_API_KEY);
});
```

Once Appsee has been started, you can tag screens and send events like in the example shown below:

```javascript
import * as Appsee from 'nativescript-appsee';

Appsee.startScreen('SelfDestructScreen');
Appsee.addScreenAction('UserHitSelfDestructButton');
Appsee.addEvent('SelfDestructInitiated');
Appsee.addEvent(
    'SelfDestructInitiatedWithProperties', {
        'time_until_destruction' : 19.1,
        'tons_of_tnt' : 3,
        'message' : "RIP",
        'snapshot' : {
          "current_device_state" : "¯\_(ツ)_/¯"
        }
    }
);
```

A full description of all available methods is included in the section below.

## Plugin API

This plugin exposes a unified JavaScript API for the functionality described in the
[Android](https://www.appsee.com/docs/android/api) and
[iOS](https://www.appsee.com/docs/ios/api) Appsee API documentation.

##### Starting Appsee Monitoring
| Function | Arguments | Description |
| --- | --- | --- |
| start | apiKey | Enables Appsee monitoring |
| setDebug | log | Enables or disables Logcat/NSLog debugging messages |

##### Controlling Appsee Video Recording
| Function | Arguments | Description |
| --- | --- | --- |
| stop | N/A | Stops the Appsee video recording process|
| pause | N/A | Pauses the Appsee video recording process|
| resume | N/A | Resumes the Appsee video recording process|

#### Marking and Unmarking Sensitive UI views
| Function | Arguments | Description |
| --- | --- | --- |
| markViewAsSensitive | view | Labels a view as being "sensitive" during an Appsee session |
| unmarkViewAsSensitive | view | Labels a view as **NOT** being "sensitive" during an Appsee session |

#### Labeling Events and Actions
| Function | Arguments | Description |
| --- | --- | --- |
| startScreen | screenName | Marks the beginning of a new screen on the Appsee session timeline |
| addEvent | eventName | Adds an event to the session timeline in Appsee |
| addEvent | eventName, properties | Adds an event with the supplied map of properties to the session timeline in Appsee |
| addScreenAction | actionName | Adds an action to the session timeline in Appsee |
| setUserId | userId | Overrides the user's ID in Appsee for the current session |
| setLocationDescription | description | Describes the current user's location |

#### Controlling the Appsee Session
| Function | Arguments | Description |
| --- | --- | --- |
| finishSession | verifyBackground, shouldUpload | Prematurely terminates the current Appsee session |
| forceNewSession | N/A  | Forces the beginning of a new session in Appsee |
| upload | N/A | Forces the upload of previous Appsee sessions |

#### Controlling the Appsee Session
| Function | Arguments | Description |
| --- | --- | --- |
| installJavascriptInterface | WebView | Embeds an Appsee JavaScript library in the web view, allowing for Appsee methods to be called from within JavaScript. See more information [here](https://www.appsee.com/docs/ios/api#javascript) |

## License

Apache License Version 2.0, January 2004
