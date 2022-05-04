import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { db } from "./firebase.js";
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "./firebase.js"
import { doc, onSnapshot, setDoc } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";

import { updateDocument, createDocument, getDocumentContent } from "./api";

function App() {
  const [documentID, setDocumentID] = useState("");
  const [documentContent, setDocumentContent] = useState("");
  const [isDocumentSelected, setIsDocumentSelected] = useState(false);

  const handleCreateDoc = () => {
    console.log("Creating document");
    const generatedRoomID = uuidv4();

    createDocument(generatedRoomID);

    setIsDocumentSelected(true);
    setDocumentID(generatedRoomID);

    setDoc(doc(db, "documents", generatedRoomID), {
      content: ""
    });
  };

  const handleDocumentIDChanged = (event) => {
    const newID = event.target.value;
    console.log(newID);
    setDocumentID(newID);
  };

  const getDocByID = () => {
    getDocumentContent(documentID);
    setIsDocumentSelected(true);

    onSnapshot(doc(db, "documents", documentID), (doc) => {
      console.log("Current data: ", doc.data());
      setDocumentContent(doc.data().content);
    });
  };

  const handleDocumentContentChanged = (event) => {
    const newContent = event.target.value;
    setDocumentContent(newContent);
    updateDocument(newContent, documentID);
  };

  const handleUnsubscribe = () => {
    setIsDocumentSelected(false);
    setDocumentID("");
  };

  return (
    <div className="App">
      {isDocumentSelected ? (
        <>
          <Button onClick={handleUnsubscribe}>Choose another document</Button>
          <Grid container>
            <TextField
              multiline
              minRows={30}
              onChange={handleDocumentContentChanged}
              value={documentContent}
              style={{ margin: 16, width: "90vw" }}
            ></TextField>
          </Grid>
        </>
      ) : (
        <Grid container direction="column">
          <Grid container style={{ margin: 16 }}>
            <Button onClick={handleCreateDoc}>Create new document</Button>
          </Grid>
          <Grid container direction="row">
            <TextField
              onChange={handleDocumentIDChanged}
              value={documentID}
              placeholder="enter document ID"
              style={{ margin: 16 }}
            ></TextField>
            <Button onClick={getDocByID} style={{ margin: 16 }}>
              Enter a room by ID
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
