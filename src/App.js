import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "15/10/2022",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "15/10/2022",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "15/10/2022",
    },
    {
      id: nanoid(),
      text: "this is my fourth note",
      date: "15/10/2022",
    },
  ]);

  const [searchText, handleSearch] = useState("");

  useEffect(() => {
    console.log("Initialized");
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    console.log(savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const data = notes.filter((note) => note.id !== id);
    setNotes(data);
  };

  return (
    <div className="container">
      <Search handleSearch={handleSearch} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
