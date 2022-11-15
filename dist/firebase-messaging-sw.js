importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js')

var config = {
    // apiKey: 'AIzaSyABRALdPhSmLH_NdwxQ27gcwG-_v9QacV4',
    apiKey: "AIzaSyBszkKAUdRj2VMG4UYwXifSrFgsZjlvfLg",
    authDomain: "ashiksam-247.firebaseapp.com",
    projectId: "ashiksam-247",
    storageBucket: "ashiksam-247.appspot.com",
    messagingSenderId: "422084835205",
    appId: "1:422084835205:web:c6cca3c4e25f3a3f40b6ec",
    measurementId: "G-RMSV7G55TT"


    // appId: "1:1036315032673:web:6b276a229c7862a4bfbe20",
}

firebase.initializeApp(config)

const messaging = firebase.messaging()