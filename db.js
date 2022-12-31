// import { initializeApp, cert } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";
// import admin from "firebase-admin";

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const admin = require("firebase-admin");

// import serviceAccount from "./mobile-221211-firebase-adminsdk-5bl0v-b2edae6b06.json" assert { type: "json" };
const serviceAccount = require("./firestore.config.json");

const app = initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  db: getFirestore(app),
};
