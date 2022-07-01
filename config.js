var admin = require("firebase-admin");

var serviceAccount = require("./leapfrog-project-firebase-adminsdk-pufxl-682e7a171c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();
const User = db.collection("Users");
module.exports = User;