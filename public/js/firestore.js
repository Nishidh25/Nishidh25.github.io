(function(){
//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCrVZw3CWbkezlaXnpq_L7NhJxLJhQ-eUs",
    authDomain: "web-profile-a5b47.firebaseapp.com",
    projectId: "web-profile-a5b47",
});

var db = firebase.firestore();

//db.collection("work").get().then((querySnapshot) => {
//    querySnapshot.forEach((doc) => {
//        console.log(`${doc.id} => ${doc.data()}`);
//    });
//});    


db.collection('work').get().then(snap => {
   size = snap.size // will return the collection size
   console.log("Size = ", size)
});

db.collection("work").doc("1")
  .get()
  .then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });

}());