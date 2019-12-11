 
import React from 'react';
import ReactDOM from 'react-dom';
// polyfills
 
import * as serviceWorker from './serviceWorker';
import { Shop } from './server-components';
import Firebase, { FirebaseContext } from './firebase';
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
        <Shop />
    </FirebaseContext.Provider>, 
document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();