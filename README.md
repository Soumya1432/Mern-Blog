
# A full stack mern blog web application

This is a full-stack blog application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to register, log in, create, edit, delete, and view blog posts. Comments can be added to posts, and user profiles can be managed.




## Features

Authentication: Secure user authentication system to protect your blogs.

Create Blog: Easily create and publish your blogs with a user-friendly interface.

Delete Blog: Remove unwanted blogs with a simple delete option.

Update Blog: Edit and update your blogs as your content evolves.

View Other User Blogs: Explore and read blogs published by other users.

Dashboard: See your total post comments 

Search : Categorized search , and also keyword specific search.


## Getting started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone this repository
```
https://github.com/Soumya1432/Mern-Blog.git
```

cd Mern-Blog

#### Install the dependencies for backend
```
cd api

npm install
```
#### Install the dependencies for frontend
```
cd client

npm install

```
## Environment Variables

Create a .env file in the api and client  directory and add the following environment variables:

### for client

`VITE_FIREBASE_API_KEY=`

`VITE_ORIGIN=`

`VITE_API=`


## for api
#### for database mongodb connection
`MONODB= `
#### create a jwt secret key 
`JWT_SECRET=`
#### for client connection
`ORIGIN=`
## Usage/Examples
# Google Authentication with Firebase

This project uses Firebase for Google authentication. Follow the steps below to set up and configure Firebase for Google Sign-In in your project.

## Prerequisites

1. [Node.js](https://nodejs.org/en/)
2. A Firebase project ([Firebase Console](https://console.firebase.google.com/))
3. Vite (if you are using it for your React app)

## Firebase Setup

1. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add project" and follow the instructions to create a new project.

2. **Enable Google Sign-In**:
   - In your Firebase project, go to the "Authentication" section.
   - Click on the "Sign-in method" tab.
   - Enable "Google" and configure it with your project settings.

3. **Add Firebase to Your Web App**:
   - In the Firebase Console, go to "Project settings" and click on "Add app".
   - Select the web icon (`</>`) to create a new web app.
   - Follow the instructions to register your app and obtain your Firebase configuration object.

## Installation

1. **Install Firebase**:
   ```bash
   npm install firebase


2. **Initialize Firebase**:


```javascript
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
```

3. **For photo uploading in firebase define a rules**:
```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow write: if
        request.auth != null &&  // Check if the user is authenticated
        request.resource.size < 2 * 1024 * 1024 &&  // Check if the file size is less than 2 MB
        request.resource.contentType.matches('image/.*');  // Check if the content type starts with "image/"
      allow read: if true;  // Allow read access to all files
    }
  }
}

```


## Screenshots
Home page 

**Light mode**
![Screenshot (1106)](https://github.com/user-attachments/assets/78bb172c-9cfd-46ce-bca0-58fa1dec8e78)

**Dark mode**
![Screenshot (1105)](https://github.com/user-attachments/assets/7d0755e4-abde-4e2e-958e-c9c5ae7b0ee5)

**Sign up **
![Screenshot (1093)](https://github.com/user-attachments/assets/b9386aae-48bd-473b-a6a7-d3eb5e9542df)

**Profile Page**
![Screenshot (1096)](https://github.com/user-attachments/assets/9949c2c9-c7ba-4a4b-be2c-46ba68e4761e)

**Post Page**
![Screenshot (1097)](https://github.com/user-attachments/assets/ce622b17-19ff-4e76-9824-9100e3f0a786)

**User post Comments page**
![Screenshot (1099)](https://github.com/user-attachments/assets/7f4c8328-e29a-48e2-8dc3-2b4a9c97c34e)

**User Dashboard page**
![Screenshot (1107)](https://github.com/user-attachments/assets/0ff22bf0-f0ad-454a-90fd-968f55a83fa6)

**Total posts by User page**
![Screenshot (1108)](https://github.com/user-attachments/assets/a36d789a-55c8-4e92-a341-0b9326bdf4e6)

**Total comments by user page**
![Screenshot (1109)](https://github.com/user-attachments/assets/6499f32a-ccca-49cf-a0c8-0b63f3cbc626)

**And also every page has both light and dark mode features**


