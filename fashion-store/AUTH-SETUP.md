# Koma Firebase Auth Setup

This site is ready for Firebase Authentication, but you must add your own Firebase project keys before login works.

## 1. Create Firebase project

Go to https://console.firebase.google.com and create a project for Koma.

## 2. Add a web app

In Firebase project settings, add a Web app and copy the config values.

Paste them into `firebase-config.js`:

```js
window.KOMA_FIREBASE_CONFIG = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  appId: "your-app-id",
};
```

## 3. Enable sign-in methods

In Firebase Console, open Authentication, then Sign-in method, and enable:

- Google
- Email/Password

## 4. Run from localhost or hosting

Firebase Auth will not work properly from a raw `file://` page. Run the site with a local server or deploy it.

Example local server:

```bash
python -m http.server 5500
```

Then open:

```text
http://127.0.0.1:5500
```
