import { db } from "./firebase.js";
import { doc, onSnapshot } from "firebase/firestore";

export const updateDocument = (content, documentID) => {
  console.log(content, documentID);
  console.log("Changing contents");
};

export const createDocument = (documentID) => {
  console.log("creating document", documentID);
};

export const getDocumentContent = (documentID) => {
  console.log("Getting document by ID", documentID);
};

export const subscribeToDocumentChanges = (documentID) => {
  console.log("Subscribing to the document");
  const subs = onSnapshot(doc(db, "documents", documentID), (doc) => {
    console.log("Current data: ", doc.data());
    return doc.data();
  });
  return subs;
};

export const unsubscribeFromDocumentChanges = (documentID) => {
  console.log("Unsubscribing to the document");
};
