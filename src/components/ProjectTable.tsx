import React from 'react';
import { Project } from '../types/Project';
import ProjectRow from './ProjectRow';

interface Props {
  projects: Project[];
  onMarkDone: (index: number) => void;
  onRestart: (index: number) => void;
  onStart: (index: number) => void;
  onNotify: (index: number) => void;
  onApprove: (projectIndex: number, reqIndex: number) => void;
  onDELETE: (index: number) => void;
  onAddProject: () => void;
}

export default function ProjectTable({
  projects,
  onMarkDone,
  onRestart,
  onStart,
  onNotify,
  onApprove,
  onDELETE,
  onAddProject,
}: Props) {
  return (
    <table width="100%" border={1} cellPadding={10}>
      <thead>
        <tr>
          <th>Project</th>
          <th>Time</th>
          <th>Status</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, i) => (
          <ProjectRow
            key={i}
            index={i}
            project={project}
            onMarkDone={onMarkDone}
            onRestart={onRestart}
            onStart={onStart}
            onApprove={onApprove}
            onDELETE={onDELETE}
          />
        ))}
        <tr>
          <td colSpan={5} style={{ textAlign: 'center' }}>
            <button onClick={onAddProject}>+ Add Project</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}