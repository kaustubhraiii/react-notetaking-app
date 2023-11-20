import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import AddNote from "./components/AddNote";

const App = () => {
  return (
    <div>
      <Header />
      <Note />
      <AddNote />
    </div>
  );
};

export default App;
