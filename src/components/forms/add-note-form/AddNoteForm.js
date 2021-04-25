import { useState, useContext } from 'react';
import Button from '../../ui/button';

import { NotesContext } from '../../../contexts/NotesProvider';

import './style.css';

function AddNoteForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { addNewNote, nextId } = useContext(NotesContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      title,
      description,

      id: nextId,
    };
    addNewNote(newNote);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title - {title}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          required
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          required
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}></textarea>
      </div>

      <Button type="submit" text="Add Note" className="btn btn-primary" />
    </form>
  );
}

export default AddNoteForm;
