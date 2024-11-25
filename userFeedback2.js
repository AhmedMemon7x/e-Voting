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
const auth = firebase.auth();
function submitFeedback(){
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            const uid = user.uid;
            const userFeedback = document.getElementById("userFeedback").value;
            if (userFeedback !== "") {
                const userRef = firebase.database().ref(`userEmail/${uid}`);
                userRef.once("value", snapshot => {
                    const userData = snapshot.val();
                    const key = fb.database().ref("usersFeedback").push().key;
                    const nemail=userData.email;
                    // console.log(userData.email)
                    const feedbackUser = {
                        Email: nemail,
                        Feedback: userFeedback
                    };
                    fb.database().ref("usersFeedback").child(key).set(feedbackUser);
                    alert("Feedback has been submitted!");
                    document.getElementById("userFeedback").value = "";
                });
            } else {
                alert("Please enter feedback before submitting!");
            }
        } else {
            alert("Error: User not authenticated.");
        }
    });
}