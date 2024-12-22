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
  function signIn() {
    let em = document.getElementById("userEmail").value;
    let ps = document.getElementById("userPass").value;
     if(em==="admin@gmail.com"&&ps==="xxxxxxxx"){
    window.open('admxyz321.html')
      // console.log("Ahmed")
    }
    else{
    firebase
      .auth()
      .signInWithEmailAndPassword(em,ps)
      .then(async(userCredential) => {
        // Signed in
        const user = userCredential.user;
       await storeEmail(user.email)
       .then(() =>{
         window.location.href = "userPortal.html";
       })
       .catch((error) =>{
        console.error("Error storing email",error)
       })
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Incorrect Email or Password")
      });
  }
  }
  function storeEmail(email) {
    // alert("A");
    const userRef = firebase.database().ref("userEmail");
    const userKey = firebase.auth().currentUser.uid;
    return userRef.child(userKey).set({
      email: email,
    });
  }

