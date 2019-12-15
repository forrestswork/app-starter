export const environment = {
  production: false,
  digPlatform: {
    log: {
      console: {
        enabled: true,
        priority: ['ERROR', 'WARNING', 'INFO']
      },
      firestore: {
        enabled: true,
        priority: ['SYSTEM', 'ERROR']
      }
    },
    firebase: {
      apiKey: "AIzaSyD-f6LSqgZzkZO3WBG_gZ8d6z1-DYYlwV0",
      authDomain: "dig-platform-app-sandbox.firebaseapp.com",
      databaseURL: "https://dig-platform-app-sandbox.firebaseio.com",
      projectId: "dig-platform-app-sandbox",
      storageBucket: "dig-platform-app-sandbox.appspot.com",
      messagingSenderId: "949411248539",
      appId: "1:949411248539:web:bfc94735076f7f54d0c93e",
      measurementId: "G-CJ49XZGY68"
    }
  }
};

import 'zone.js/dist/zone-error';  // Included with Angular CLI.
