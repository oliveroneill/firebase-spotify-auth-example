'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Create token for custom user
exports.signUp = functions.https.onCall((data, context) => {
  return admin.auth().createCustomToken(data.user_id)
    .then(customToken => { return { 'token': customToken } })
});
