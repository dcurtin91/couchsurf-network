# Couchsurf Network

Live URL: [Couchsurf Network](https://dcurtin91.github.io/couchsurf-network/)

## Overview

**Couchsurf Network** is a platform for travelers to find and offer couches to crash on. The app allows users to browse available spaces and contact hosts. To unlock access to contact information and full listings, users must sign up as hosts by registering their own spaces. If a host's space is not ready or unavailable, they can simply leave the 'vacancy' option unchecked during registration, which hides their listing from the public directory.

## How to Explore the Site

You can either:
1. **Register**: Create an account using any email (a dummy email works fine).
2. **Login with Test Credentials**:
   - **Email**: `testuser@website.com`
   - **Password**: `tessttest1`

## Running the App Locally

To set up the Couchsurf Network locally:

1. Clone this repository to your local machine.
2. Install dependencies:
   npm install
3. Start the dev server:
   npm run dev
4. Create a new project in Firebase and enable Firestore and Firebase Authentication.
5. Obtain your Firebase credentials and replace the values in the Firebase.jsx file:
   const firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  projectId: "<YOUR-PROJECT-ID>",
  storageBucket: "<YOUR-STORAGE-BUCKET>",
  messagingSenderId: "<YOUR-MESSAGING-SENDER-ID>",
  appId: "<YOUR-APP-ID>",
  measurementId: "<YOUR-MEASUREMENT-ID>",
};
6. Save your changes and restart the server.
