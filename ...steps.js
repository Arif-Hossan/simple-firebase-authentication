/*
1.visit console.firebase.google.com
2.create a new firebase project
3.visit doc(go to docs) : Build > Authentication > Web > Getting Started
4.Register Web App > Firebase Project Home > Click Web > Give name and register
5.Install Firebase for your project: npm install firebase
6.Dangerous :Get firebase config and put it in firebase.init.js
7.export app from firebase.init.js
----------------
setup the provider
------------------
8.create auth using getAuth from firebase by using app from firebase.init.js
9.create a google auth provider. do not forget to use new
10.go to firebase > Build > authentication > sign in method
11.enable google sign in method
12.create a button for google sign in with method with a click handler
13.inside the event handler ,call signinWithPopup with auth and provider
14.after signInWithPopup
-------------------
Display Data
-------------------
15. create github,facebook, twitter, app
16.get client id and client secret
*/