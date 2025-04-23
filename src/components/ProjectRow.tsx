// src/components/ProjectRow.tsx
import React from 'react';
import { format } from 'date-fns';
import { Project } from '../types/Project';
import StatusBadge from './StatusBadge';

interface Props {
  project: Project;
  index: number;
  onMarkDone: (index: number) => void;
  onRestart: (index: number) => void;
  onStart: (index: number) => void;
  onApprove: (projectIndex: number, reqIndex: number) => void;
  onDELETE: (index: number) => void;
}

export default function ProjectRow({
  project,
  index,
  onMarkDone,
  onRestart,
  onStart,
  onApprove,
  onDELETE,
}: Props) {
  return (
    <>
      <tr style={{ backgroundColor: '#fffbe6' }}></tr>
      <tr>
        <td>
          {project.name}
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to DELETE this project?')) {
                onDELETE(index);
              }
            }}
            style={{
              marginLeft: 10,
              backgroundColor: '#ff4d4f',
              color: 'white',
              border: 'none',
              padding: '3px 6px',
              fontSize: '1rem',
              borderRadius: '6px'
            }}
          >
            DELETE
          </button>
        </td>
        <td style={{ textAlign: 'center' }}>
          {project.status === 'releasing' && project.startTime ? (
            <>Started at: <span style={{ display: 'inline-block', width: '100%' }}>{format(project.startTime, 'PPP')}</span></>
          ) : project.startTime && project.endTime ? (
            <>
              Released: <span style={{ display: 'inline-block', width: '100%' }}>{format(project.startTime, 'PPP')}</span><br />
              Completed: <span style={{ display: 'inline-block', width: '100%' }}>{format(project.endTime, 'PPP')}</span>
            </>
          ) : 'Active'}
        </td>
        <td><StatusBadge status={project.status} /></td>
        <td>{project.author?.name || '-'}</td>
        <td>
          {project.status === 'releasing' && (
            <button onClick={() => onMarkDone(index)} style={{ marginRight: 5 }}>Mark Done</button>
          )}
          {project.status === 'Active' && !project.startTime && (
            <button onClick={() => onStart(index)} style={{ marginRight: 5 }}>Start Release</button>
          )}
          {project.status === 'Active' && project.startTime && (
            <button onClick={() => onRestart(index)} style={{ marginRight: 5 }}>Restart Release</button>
          )}
        </td>
      </tr>
    </>
  );
}
