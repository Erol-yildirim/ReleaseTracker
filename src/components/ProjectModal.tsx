import React from 'react';

interface Props {
  title: string;
  projectName: string;
  authorName: string;
  authorEmail: string;
  onChangeProjectName: (val: string) => void;
  onChangeAuthorName: (val: string) => void;
  onChangeAuthorEmail: (val: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

export default function ProjectModal({
  title,
  projectName,
  authorName,
  authorEmail,
  onChangeProjectName,
  onChangeAuthorName,
  onChangeAuthorEmail,
  onSubmit,
  onClose,
}: Props) {
  return (
    <div style={modalOverlayStyle}>
      <div style={modalBoxStyle}>
        <h2>{title}</h2>
        <label>Project Name:</label>
        <input value={projectName} onChange={e => onChangeProjectName(e.target.value)} style={inputStyle} />
        <label>Author Name:</label>
        <input value={authorName} onChange={e => onChangeAuthorName(e.target.value)} style={inputStyle} />
        <div style={buttonRowStyle}>
          <button onClick={onSubmit}>ADD</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const modalOverlayStyle = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

const modalBoxStyle = {
  backgroundColor: 'white',
  padding: 30,
  borderRadius: 10,
  minWidth: 300,
};

const inputStyle = {
  width: '100%',
  marginBottom: 10,
};

const buttonRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};
