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
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "name": "user navigates to profile \"John Doe\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "login.verifySuccessfulLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "name": "user navigates to profile \"Rick Ashley\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "login.verifySuccessfulLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "User is at homepage trying to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "name": "user navigates to profile \"New Learner1\" homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "login.verifySuccessfulLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
    }
  ]
});
formatter.background({
  "name": "Trying to register",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the signup link",
  "keyword": "When "
});
formatter.match({
  "location": "register.signupLink()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.match({
  "location": "register.clicksRegister()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error validation messages is shown to user",
  "keyword": "Then "
});
formatter.match({
  "location": "register.userGetsError()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.verifyHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the signup link",
  "keyword": "When "
});
formatter.match({
  "location": "register.signupLink()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Register",
  "keyword": "And "
});
formatter.match({
  "location": "register.clicksRegister()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user presented with profile \"John Doe\" welcome messages",
  "keyword": "Then "
});
formatter.match({
  "location": "register.welcomeMessageSucess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});