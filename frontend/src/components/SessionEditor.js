import React, { useState, useEffect, useRef } from 'react';
import { api } from '../utils/api';
import AutoSaveIndicator from './AutoSaveIndicator';

export default function SessionEditor({ token, session, onSaved }) {
  const [title, setTitle] = useState(session?.title || '');
  const [tags, setTags] = useState(session?.tags?.join(', ') || '');
  const [jsonUrl, setJsonUrl] = useState(session?.jsonUrl || '');
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [error, setError] = useState('');

  const timeoutRef = useRef();
  const intervalRef = useRef();

  // Auto-save on inactivity (5s) and every 30s
  useEffect(() => {
    const scheduleAutoSave = () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(save, 5000);
    };
    scheduleAutoSave();
    intervalRef.current = setInterval(save, 30000);
    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    }
    // eslint-disable-next-line
  }, [title, tags, jsonUrl]);

  const save = async (publish = false) => {
    setSaving(true);
    setError('');
    try {
      const body = {
        id: session?._id,
        title,
        tags: tags.split(',').map(t=>t.trim()).filter(Boolean),
        jsonUrl,
        isPublished: publish ? true : session?.isPublished
      };
      const data = await api('/my-sessions/save', 'POST', body, token);
      setLastSaved(Date.now());
      setSaving(false);
      onSaved && onSaved(data);
    } catch (err) {
      setError(err.message);
      setSaving(false);
    }
  };

  return (
    <div>
      <label>Title: <input value={title} onChange={e=>setTitle(e.target.value)} /></label><br/>
      <label>Tags (comma separated): <input value={tags} onChange={e=>setTags(e.target.value)} /></label><br/>
      <label>JSON URL: <input value={jsonUrl} onChange={e=>setJsonUrl(e.target.value)} /></label><br/>
      <button onClick={()=>save(false)}>Save Draft</button>
      <button onClick={()=>save(true)} disabled={session?.isPublished}>Publish</button>
      <AutoSaveIndicator saving={saving} lastSaved={lastSaved} />
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
}