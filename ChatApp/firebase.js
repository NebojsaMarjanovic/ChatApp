import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAVCM0OiVUaYR3tsLl2ua8iU32an-VEoCg",
    authDomain: "chataplikacija-4765b.firebaseapp.com",
    projectId: "chataplikacija-4765b",
    storageBucket: "chataplikacija-4765b.appspot.com",
    messagingSenderId: "258224778136",
    appId: "1:258224778136:web:aca949c5cee554ae25d9ed"
};
let app;
if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();
export {db,auth}
