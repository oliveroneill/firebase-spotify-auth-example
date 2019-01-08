# Firebase Custom Authentication Example using Spotify

A simple example of using Spotify as the auth provider for Firebase.
Your Spotify username will be stored as a user in Firebase.

## Installation
Create a file called `config.js` in `public/`. This should define firebase and
spotify configuration as follows:
```javascript
const firebaseConfig = {
  apiKey: "<ENTER-API-KEY>",
  authDomain: "<ENTER-AUTH-DOMAIN>",
  projectId: "<ENTER-PROJECT-ID>",
};

const spotifyConfig = {
  clientId: '<ENTER-CLIENT-ID>',
  redirectUri: '<ENTER-CALLBACK-URI>',
};
```

## Deploy
```bash
firebase deploy
```
