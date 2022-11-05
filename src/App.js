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
      color: "#B1B2FF"
    },
  ]);

  const palette = [
    {
      id: nanoid(),
      color: "#B9FFF8",
    },
    {
      id: nanoid(),
      color: "#DEF5E5",
    },
    {
      id: nanoid(),
      color: "#B9E0FF",
    },
    {
      id: nanoid(),
      color: "#FFB9B9",
    },
    {
      id: nanoid(),
      color: "#B1B2FF",
    },
  ];

  const [searchText, handleSearch] = useState("");
  const [color, setColor] = useState(palette[0]?.color);

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
      color: color,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const data = notes.filter((note) => note.id !== id);
    setNotes(data);
  };

  const selectColor = (data) => {
    setColor(data?.color);
    console.log(color);
  };

  return (
    <div className="container">
      <Search handleSearch={handleSearch} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        color={color}
        handleAddNote={addNote}
        deleteNote={deleteNote}
        palette={palette}
        selectColor={selectColor}
      />
    </div>
  );
};

export default App;
