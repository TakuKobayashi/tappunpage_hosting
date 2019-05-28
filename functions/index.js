const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

// databaseの参照を作成
const fireStore = admin.firestore()

exports.topics = functions.https.onRequest(async (req, res) => {
  const productsRef = fireStore.collection('products');
  console.log(productsRef);
  const productDoc = productsRef.doc("g4ojnu0Ngkf4OFoV27Wn")
  console.log(productDoc);
  const values = await productDoc.get()

  res.json(values.data());
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
