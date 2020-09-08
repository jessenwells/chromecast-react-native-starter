import firebase from 'firebase/app'
import 'firebase/storage'
import {
 REACT_APP_API_KEY,
 REACT_APP_AUTH,
 REACT_APP_DB_URL,
 REACT_APP_PROJ,
 REACT_APP_STOR,
 REACT_APP_MSG,
 REACT_APP_ID,
} from '@env'

var config = {
 apiKey: REACT_APP_API_KEY,
 authDomain: REACT_APP_AUTH,
 databaseURL: REACT_APP_DB_URL,
 projectId: REACT_APP_PROJ,
 storageBucket: REACT_APP_STOR,
 messagingSenderId: REACT_APP_MSG,
 appId: REACT_APP_ID,
}

firebase.initializeApp(config)

var store = firebase.storage()
export default store
