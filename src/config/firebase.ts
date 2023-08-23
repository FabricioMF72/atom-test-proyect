import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const config = require('./creds.json')

initializeApp({
  credential: cert(config)
});

export const db = getFirestore();