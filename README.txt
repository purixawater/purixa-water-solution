PURIXA CRM V5 — FIREBASE CONNECTED

Firebase Web App configuration has been inserted for project:
purixa-crm

IMPORTANT:
1. Firebase Console > Authentication > Sign-in method > enable Email/Password.
2. Firebase Console > Firestore Database > Create database.
3. For initial testing, choose a suitable database location and start in test mode only if you understand the security implications. Before real business use, add proper Firestore security rules.
4. Upload this index.html to your website/GitHub Pages.

The Firebase Web API key is normally not a secret by itself. Never put Firebase Admin SDK/private service-account keys in this website.

The CRM uses Firebase Authentication and Firestore. Each signed-in user currently uses the same top-level collections, so production security rules should be added before storing real customer data.
