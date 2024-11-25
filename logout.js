const firebaseConfig = {
    apiKey: "AIzaSyAZq4imcuIZ_MTthLSza1pAnnydINhakbU",
    authDomain: "voting-website-584f3.firebaseapp.com",
    databaseURL: "https://voting-website-584f3-default-rtdb.firebaseio.com",
    projectId: "voting-website-584f3",
    storageBucket: "voting-website-584f3.firebasestorage.app",
    messagingSenderId: "521679073653",
    appId: "1:521679073653:web:20dce826febbd86b96233c",
    measurementId: "G-R72Q3972W6"
  };
  const fb = firebase.initializeApp(firebaseConfig);


async function logout() {
 await firebase.auth().signOut()
    .then(() => {
      // Sign-out successful.
      console.log("User signed out successfully.");
      // Redirect to the login page or perform other actions
      window.location.href = "signin.html"; // Replace with your login page URL
    })
    .catch((error) => {
      // An error happened.
      console.error("Error signing out:", error);
    });
}
