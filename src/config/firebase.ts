import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const config = require('./creds.json')

// Initialize Firebase
initializeApp({
  credential: cert(config)
});
// Get a reference to the Firestore instance
export const db = getFirestore();