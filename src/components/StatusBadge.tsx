import React from 'react';

interface Props {
  status: 'Active' | 'releasing';
}

export default function StatusBadge({ status }: Props) {
  const color = status === 'releasing' ? 'red' : 'green';
  const label = status === 'releasing' ? 'Releasing' : 'Active';

  return (
    <span
      style={{
        color: 'white',
        backgroundColor: color,
        padding: '4px 8px',
        borderRadius: 4,
      }}
    >
      {label}
    </span>
  );
}
