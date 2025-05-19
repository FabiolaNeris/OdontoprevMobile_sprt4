import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig ={
    apiKey: 'AIzaSyAuL-ZSLBtT8f36_pJpasDt9SPxM6d72zk',
    authDomain: 'odontoprev-58db4.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'odontoprev-58db4',
    storageBucket: 'odontoprev-58db4.firebasestorage.app',
    messagingSenderId: '961055901838',
    appId: '1:961055901838:web:c07c7e36f971c783aea1df',
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)