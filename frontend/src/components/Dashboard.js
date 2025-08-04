import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import SessionEditor from './SessionEditor';

export default function Dashboard({ token }) {
  const [sessions, setSessions] = useState([]);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');

  const fetchSessions = async () => {
    try {
      setSessions(await api('/my-sessions', 'GET', undefined, token));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => { fetchSessions(); }, [token]);

  const edit = (session) => setEditing(session);
  const addNew = () => setEditing({});

  return (
    <div>
      <h2>My Sessions</h2>
      <button onClick={addNew}>New Session</button>
      <ul>
        {sessions.map(s => (
          <li key={s._id}>
            <b>{s.title}</b> [{s.isPublished ? 'Published' : 'Draft'}] 
            <button onClick={()=>edit(s)}>Edit</button>
          </li>
        ))}
      </ul>
      {editing && (
        <SessionEditor
          key={editing._id || 'new'}
          session={editing}
          token={token}
          onSaved={s => { setEditing(s); fetchSessions(); }}
        />
      )}
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
}