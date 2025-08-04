import React from 'react';

export default function AutoSaveIndicator({ saving, lastSaved }) {
  return (
    <div style={{color: saving ? 'orange' : 'green'}}>
      {saving ? 'Auto-saving...' : lastSaved ? `Last saved: ${new Date(lastSaved).toLocaleTimeString()}` : ''}
    </div>
  );
}