import React from 'react';

interface Props {
  name: string;
  ticket: string;
  onChangeName: (val: string) => void;
  onChangeTicket: (val: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

export default function RequestModal({
  name,
  ticket,
  onChangeName,
  onChangeTicket,
  onSubmit,
  onClose,
}: Props) {
  return (
    <div style={modalOverlayStyle}>
      <div style={modalBoxStyle}>
        <h2>Merge Request</h2>
        <label>Your Name:</label>
        <input value={name} onChange={e => onChangeName(e.target.value)} style={inputStyle} />
        <label>PR URL:</label>
        <input value={ticket} onChange={e => onChangeTicket(e.target.value)} style={inputStyle} />
        <div style={buttonRowStyle}>
          <button onClick={onSubmit}>Submit</button>
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
