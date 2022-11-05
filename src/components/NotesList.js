import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({
  notes,
  handleAddNote,
  deleteNote,
  palette,
  selectColor,
  color,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
          color={note?.color}
        />
      ))}
      <AddNote
        handleAddNote={handleAddNote}
        palette={palette}
        selectColor={selectColor}
        color={color}
      />
    </div>
  );
};

export default NotesList;
