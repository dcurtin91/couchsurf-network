Couchsurf Network
Live URL: Couchsurf Network

Overview
Couchsurf Network is a platform for travelers to find and offer couches to crash on. The app allows users to browse available spaces and contact hosts. To unlock access to contact information and full listings, users must sign up as hosts by registering their own space. If a host's space is not ready or unavailable, they can simply leave the 'vacancy' option unchecked during registration, which hides their listing from the public directory.

Key Features:
Host Registration: Sign up as a host to list your available space and access the full directory of couches.
Vacancy Control: Hosts can hide their listing if their space is unavailable.
Test Credentials: Explore the platform using pre-filled test credentials to get a feel for the app.
How to Explore the Site
You can either:

Register: Create an account using any email (a dummy email works fine).
Login with Test Credentials:
Email: testuser@website.com
Password: tessttest1
Running the App Locally
To set up the Couchsurf Network locally:

Clone this repository to your local machine.
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
Firebase Setup
In order to run the app locally, you'll need to set up your own Firestore database in Firebase. Follow these steps:

Create a new project in Firebase and enable Firestore and Firebase Authentication.
Obtain your Firebase credentials and replace the values in the Firebase.jsx file:
javascript
Copy code
const firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  projectId: "<YOUR-PROJECT-ID>",
  storageBucket: "<YOUR-STORAGE-BUCKET>",
  messagingSenderId: "<YOUR-MESSAGING-SENDER-ID>",
  appId: "<YOUR-APP-ID>",
  measurementId: "<YOUR-MEASUREMENT-ID>",
};
Save your changes and restart the server.

