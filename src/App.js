import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState } from "react";

function App() {
  const [documentID, setDocumentID] = useState("");

  const handleCreateDoc = () => {
    console.log("Creating document");
  };

  const handleDocumentIDChanged = (event) => {
    const newID = event.target.value;
    console.log(newID);
    setDocumentID(newID);
  };

  return (
    <div className="App">
      <Grid direction="column">
        <Grid>
          <Button onClick={handleCreateDoc}>Create new document</Button>
        </Grid>
        <Grid direction="row">
          <TextField
            onChange={handleDocumentIDChanged}
            value={documentID}
            placeholder="enter document ID"
          ></TextField>
          <Button onClick={handleCreateDoc}>Enter a room by ID</Button>
        </Grid>
      </Grid>
      <Grid>
        <TextField value="Document text goes here"></TextField>
      </Grid>
    </div>
  );
}

export default App;
