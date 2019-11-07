import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDSTqDu5kfVGNukAIJt8AFWBYsfD5Yp5Nk",
  authDomain: "easyshop-1e3a0.firebaseapp.com",
  databaseURL: "https://easyshop-1e3a0.firebaseio.com",
  projectId: "easyshop-1e3a0",
  storageBucket: "easyshop-1e3a0.appspot.com",
  messagingSenderId: "837462263973",
  appId: "1:837462263973:web:9f849f84dc669d395fe54c",
  measurementId: "G-3ZRYQZXNRC"
}

class Firebase {
  constructor() {
    firebase.initializeApp(config);
  }

  products = () => {
    
  }
}
export default Firebase;
