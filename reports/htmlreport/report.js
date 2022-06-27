$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "E-learning Login page",
  "description": "  as a recurring user, it wants to login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f1"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1n"
    }
  ]
});
formatter.step({
  "name": "user provides false creds \"\u003cusrnam\u003e\" \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "validation message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usrnam",
        "pass"
      ]
    },
    {
      "cells": [
        "zsxdr",
        "pass12"
      ]
    },
    {
      "cells": [
        "qwert",
        "pass123"
      ]
    },
    {
      "cells": [
        "abs",
        "a123"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1n"
    }
  ]
});
formatter.step({
  "name": "user provides false creds \"zsxdr\" \"pass12\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.clicksLoginBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validation message is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1n"
    }
  ]
});
formatter.step({
  "name": "user provides false creds \"qwert\" \"pass123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.clicksLoginBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validation message is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries invalid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1n"
    }
  ]
});
formatter.step({
  "name": "user provides false creds \"abs\" \"a123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.clicksLoginBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validation message is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1p"
    }
  ]
});
formatter.step({
  "name": "user provides valid creds \"\u003cusrnam\u003e\" \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user navigates to profile \"\u003cprofile\u003e\" homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usrnam",
        "pass",
        "profile"
      ]
    },
    {
      "cells": [
        "John",
        "pass123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "Rick",
        "pass123",
        "Rick Ashley"
      ]
    },
    {
      "cells": [
        "new1",
        "pass123",
        "New Learner1"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1p"
    }
  ]
});
formatter.step({
  "name": "user provides valid creds \"John\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.enterProperCreds(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.clicksLoginBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to profile \"John Doe\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "login.verifySuccessfulLogin(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: MicrosoftEdge\u003d103.0.1264.37)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEBAGNIKWORKSTA\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 103.0.1264.37, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:2323}, msedge: {msedgedriverVersion: 102.0.1245.33 (41285f1c5672..., userDataDir: C:\\Users\\003PX5~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ee61dc34144f651ff19bd534cc884526\n*** Element info: {Using\u003dname, value\u003d//strong[contains(text(), \u0027John Doe\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat lib.Automator.locateByName(Automator.java:96)\r\n\tat stepDefs.login.verifySuccessfulLogin(login.java:46)\r\n\tat ✽.user navigates to profile \"John Doe\" homepage(file:src/test/java/features/login.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1p"
    }
  ]
});
formatter.step({
  "name": "user provides valid creds \"Rick\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.enterProperCreds(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.clicksLoginBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to profile \"Rick Ashley\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "login.verifySuccessfulLogin(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: MicrosoftEdge\u003d103.0.1264.37)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEBAGNIKWORKSTA\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 103.0.1264.37, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:2375}, msedge: {msedgedriverVersion: 102.0.1245.33 (41285f1c5672..., userDataDir: C:\\Users\\003PX5~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 496acaa7de192a1660a712e16f62391a\n*** Element info: {Using\u003dname, value\u003d//strong[contains(text(), \u0027Rick Ashley\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat lib.Automator.locateByName(Automator.java:96)\r\n\tat stepDefs.login.verifySuccessfulLogin(login.java:46)\r\n\tat ✽.user navigates to profile \"Rick Ashley\" homepage(file:src/test/java/features/login.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries valid login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1p"
    }
  ]
});
formatter.step({
  "name": "user provides valid creds \"new1\" \"pass123\"",
  "keyword": "When "
});
formatter.match({
  "location": "login.enterProperCreds(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.clicksLoginBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to profile \"New Learner1\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "login.verifySuccessfulLogin(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: MicrosoftEdge\u003d103.0.1264.37)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEBAGNIKWORKSTA\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 103.0.1264.37, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:2427}, msedge: {msedgedriverVersion: 102.0.1245.33 (41285f1c5672..., userDataDir: C:\\Users\\003PX5~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b1d2ce4f30316e2831626544925a3878\n*** Element info: {Using\u003dname, value\u003d//strong[contains(text(), \u0027New Learner1\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat lib.Automator.locateByName(Automator.java:96)\r\n\tat stepDefs.login.verifySuccessfulLogin(login.java:46)\r\n\tat ✽.user navigates to profile \"New Learner1\" homepage(file:src/test/java/features/login.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/mail.feature");
formatter.feature({
  "name": "Compose mail",
  "description": "  userwould like to compose and send an email",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f2"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify if blank email could be sent",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f2p"
    },
    {
      "name": "@f2pblank"
    }
  ]
});
formatter.step({
  "name": "user clicks on the inbox option",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the compose button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters initials \"\u003cinit\u003e\" and selects recipients \"\u003crecipts\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters subject",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on send email button",
  "keyword": "And "
});
formatter.step({
  "name": "mail send succesfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "init",
        "recipts"
      ]
    },
    {
      "cells": [
        "amit",
        "amit luthra"
      ]
    }
  ]
});
formatter.background({
  "name": "user logins to its profile",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at profile page already logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "mail.user_is_at_profile_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: MicrosoftEdge\u003d103.0.1264.37)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEBAGNIKWORKSTA\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 103.0.1264.37, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:2486}, msedge: {msedgedriverVersion: 102.0.1245.33 (41285f1c5672..., userDataDir: C:\\Users\\003PX5~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bbbc35b3ec63bf985c1e61e433ad7081\n*** Element info: {Using\u003dname, value\u003d//input[@name\u003d\u0027login\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat lib.Automator.locateByName(Automator.java:96)\r\n\tat stepDefs.mail.user_is_at_profile_page(mail.java:21)\r\n\tat ✽.user is at profile page already logged in(file:src/test/java/features/mail.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify if blank email could be sent",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f2"
    },
    {
      "name": "@f2p"
    },
    {
      "name": "@f2pblank"
    }
  ]
});
formatter.step({
  "name": "user clicks on the inbox option",
  "keyword": "When "
});
formatter.match({
  "location": "mail.user_clicks_on_inbox_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the compose button",
  "keyword": "And "
});
formatter.match({
  "location": "mail.user_clicks_on_compose_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters initials \"amit\" and selects recipients \"amit luthra\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters subject",
  "keyword": "And "
});
formatter.match({
  "location": "mail.user_inputs_subject()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on send email button",
  "keyword": "And "
});
formatter.match({
  "location": "mail.user_clicks_on_send_mail()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "mail send succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "mail.mail_sent_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/registration.feature");
formatter.feature({
  "name": "Elearning registration page",
  "description": "\tAs a new user wants to enroll itself to the website",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f0"
    }
  ]
});
formatter.scenarioOutline({
  "name": "invalid user registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0n"
    }
  ]
});
formatter.step({
  "name": "user enters redundant details \"\u003cfirstName\u003e\" \"\u003clastName\u003e\" \"\u003cemail\u003e\" \"\u003cusrnam\u003e\" \"\u003cpass\u003e\" \"\u003cconfirmPass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.step({
  "name": "error validation messages is shown to user",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "usrnam",
        "pass",
        "confirmPass",
        "profile"
      ]
    },
    {
      "cells": [
        "Rick",
        "Ashley",
        "rick@roll.xyz",
        "rollrick",
        "pass123",
        "pass123",
        "Rick Ashley"
      ]
    },
    {
      "cells": [
        "John",
        "Doe",
        "JohnDoe@fb",
        "Doe",
        "Pass1",
        "Pass1",
        "John Doe"
      ]
    }
  ]
});
formatter.background({
  "name": "Trying to register",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the signup link",
  "keyword": "When "
});
formatter.match({
  "location": "register.signupLink()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "invalid user registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0n"
    }
  ]
});
formatter.step({
  "name": "user enters redundant details \"Rick\" \"Ashley\" \"rick@roll.xyz\" \"rollrick\" \"pass123\" \"pass123\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.userFillsFaltuDetails(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.match({
  "location": "register.clicksRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error validation messages is shown to user",
  "keyword": "Then "
});
formatter.match({
  "location": "register.userGetsError()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: MicrosoftEdge\u003d103.0.1264.37)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEBAGNIKWORKSTA\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 103.0.1264.37, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:2529}, msedge: {msedgedriverVersion: 102.0.1245.33 (41285f1c5672..., userDataDir: C:\\Users\\003PX5~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a69ca5f5590e62b481c59abb1fa830ec\n*** Element info: {Using\u003dname, value\u003d//div[@class\u003d\u0027\u0027]/div[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat lib.Automator.locateByName(Automator.java:96)\r\n\tat stepDefs.register.userGetsError(register.java:44)\r\n\tat ✽.error validation messages is shown to user(file:src/test/java/features/registration.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Trying to register",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the signup link",
  "keyword": "When "
});
formatter.match({
  "location": "register.signupLink()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "invalid user registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0n"
    }
  ]
});
formatter.step({
  "name": "user enters redundant details \"John\" \"Doe\" \"JohnDoe@fb\" \"Doe\" \"Pass1\" \"Pass1\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.userFillsFaltuDetails(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.match({
  "location": "register.clicksRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error validation messages is shown to user",
  "keyword": "Then "
});
formatter.match({
  "location": "register.userGetsError()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: MicrosoftEdge\u003d103.0.1264.37)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEBAGNIKWORKSTA\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 103.0.1264.37, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:2579}, msedge: {msedgedriverVersion: 102.0.1245.33 (41285f1c5672..., userDataDir: C:\\Users\\003PX5~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 63d779ec30d9006f879f4fc1dde93e4a\n*** Element info: {Using\u003dname, value\u003d//div[@class\u003d\u0027\u0027]/div[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat lib.Automator.locateByName(Automator.java:96)\r\n\tat stepDefs.register.userGetsError(register.java:44)\r\n\tat ✽.error validation messages is shown to user(file:src/test/java/features/registration.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Valid user registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0p"
    }
  ]
});
formatter.step({
  "name": "user fills unique details \"\u003cfirstName\u003e\" \"\u003clastName\u003e\" \"\u003cemail\u003e\" \"\u003cusrnam\u003e\" \"\u003cpass\u003e\" \"\u003cconfirmPass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.step({
  "name": "user presented with profile \"\u003cprofile\u003e\" welcome messages",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "username",
        "pass",
        "confirmPass",
        "profile"
      ]
    },
    {
      "cells": [
        "John",
        "Doe",
        "doe@john.net",
        "DoeJ123",
        "pass123",
        "pass123",
        "John Doe"
      ]
    }
  ]
});
formatter.background({
  "name": "Trying to register",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the signup link",
  "keyword": "When "
});
formatter.match({
  "location": "register.signupLink()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid user registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0p"
    }
  ]
});
formatter.step({
  "name": "user fills unique details \"John\" \"Doe\" \"doe@john.net\" \"\u003cusrnam\u003e\" \"pass123\" \"pass123\"",
  "keyword": "And "
});
formatter.match({
  "location": "register.userFillsUniqueDetails(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.match({
  "location": "register.clicksRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user presented with profile \"John Doe\" welcome messages",
  "keyword": "Then "
});
formatter.match({
  "location": "register.welcomeMessageSucess(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(text(),\u0027John Doe\u0027)]\"}\n  (Session info: MicrosoftEdge\u003d103.0.1264.37)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEBAGNIKWORKSTA\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 103.0.1264.37, javascriptEnabled: true, ms:edgeOptions: {debuggerAddress: localhost:2626}, msedge: {msedgedriverVersion: 102.0.1245.33 (41285f1c5672..., userDataDir: C:\\Users\\003PX5~1\\AppData\\L...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f7fb983c11ab72c42e54fe15fba5a00d\n*** Element info: {Using\u003dxpath, value\u003d//p[contains(text(),\u0027John Doe\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat lib.Automator.locate(Automator.java:87)\r\n\tat stepDefs.register.welcomeMessageSucess(register.java:54)\r\n\tat ✽.user presented with profile \"John Doe\" welcome messages(file:src/test/java/features/registration.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});