import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, deleteNote, color }) => {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          onClick={() => deleteNote(id)}
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
