import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import { set } from "express/lib/application";

function App() {
    
    const [notes, setNotes] = React.useState([])

    function addNote(note)
    {
        // // console.log(note)
        setNotes(previousNotes => {
            return(
                [...previousNotes, note]
            )
        })
    }
    function deleteNote(id)
    {
        console.log("onDelete");
        setNotes((previousNotes) => {
            return previousNotes.filter((noteItem, index) => {
                    return index !== id
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) =>{
      return <Note title={note.title} content={note.content} onDelete={deleteNote} id={index} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
