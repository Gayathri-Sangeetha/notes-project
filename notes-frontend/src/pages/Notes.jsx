import { useEffect, useState } from 'react';
import api from '../api/axios';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loadingList, setLoadingList] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  async function loadNotes() {
    setLoadingList(true);
    setErr('');
    try {
      const { data } = await api.get('/notes');
      setNotes(data || []);
    } catch (error) {
      setErr(error?.response?.data?.error || 'Failed to load notes');
    } finally {
      setLoadingList(false);
    }
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function addNote(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setSaving(true);
    setErr('');
    try {
      await api.post('/notes', { title, content });
      setTitle('');
      setContent('');
      loadNotes();
    } catch (error) {
      setErr(error?.response?.data?.error || 'Failed to add note');
    } finally {
      setSaving(false);
    }
  }

  async function deleteNote(id) {
    if (!confirm('Delete this note?')) return;
    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter(n => n._id !== id));
    } catch (error) {
      alert(error?.response?.data?.error || 'Failed to delete');
    }
  }

  async function updateNote(id, newTitle, newContent) {
    try {
      const { data } = await api.put(`/notes/${id}`, { title: newTitle, content: newContent });
      setNotes(notes.map(n => (n._id === id ? data : n)));
    } catch (error) {
      alert(error?.response?.data?.error || 'Failed to update');
    }
  }

  return (
    <div className="card">
      <h2>Your Notes</h2>

      <form onSubmit={addNote} className="form row">
        <input
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          required
        />
        <button className="btn" disabled={saving}>{saving ? 'Saving...' : 'Add Note'}</button>
      </form>

      {err && <div className="error">{err}</div>}

      {loadingList ? (
        <div>Loading...</div>
      ) : (
        <ul className="notes">
          {notes.map(n => (
            <NoteItem key={n._id} note={n} onDelete={deleteNote} onSave={updateNote} />
          ))}
          {notes.length === 0 && <li>No notes yet. Add one above!</li>}
        </ul>
      )}
    </div>
  );
}

function NoteItem({ note, onDelete, onSave }) {
  const [edit, setEdit] = useState(false);
  const [t, setT] = useState(note.title);
  const [c, setC] = useState(note.content);

  function cancel() {
    setEdit(false);
    setT(note.title);
    setC(note.content);
  }
  async function save() {
    await onSave(note._id, t, c);
    setEdit(false);
  }

  return (
    <li className="note">
      {edit ? (
        <>
          <input value={t} onChange={(e)=>setT(e.target.value)} />
          <textarea value={c} onChange={(e)=>setC(e.target.value)} />
          <div className="actions">
            <button className="btn" onClick={save}>Save</button>
            <button className="btn ghost" onClick={cancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div className="actions">
            <button className="btn" onClick={()=>setEdit(true)}>Edit</button>
            <button className="btn danger" onClick={()=>onDelete(note._id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}
