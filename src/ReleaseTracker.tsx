// src/ReleaseTracker.tsx
import React, { useState } from 'react';
import useProjects from './hooks/useProjects';
import useModal from './hooks/useModal';
import ProjectTable from './components/ProjectTable';
import ProjectModal from './components/ProjectModal';

export default function ReleaseTracker() {
  const {
    projects,
    addProject,
    markProjectDone,
    restartProject,
    approveRequest,
    startRelease,
    DELETEProject,
  } = useProjects();

  const projectModal = useModal();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [projectName, setProjectName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');

  const handleAddProject = () => {
    setProjectName('');
    setAuthorName('');
    setAuthorEmail('');
    setSelectedIndex(null);
    projectModal.open();
  };

  const handleRestart = (index: number) => {
    const p = projects[index];
    setSelectedIndex(index);
    setProjectName(p.name);
    setAuthorName(p.author?.name || '');
    setAuthorEmail(p.author?.email || '');
    projectModal.open();
  };

  const handleSubmitProject = () => {
    if (selectedIndex === null) {
      addProject({
        name: projectName,
        status: 'Active',
        startTime: null,
        endTime: null,
        author: { name: authorName, email: authorEmail },
        requests: [],
      });
    } else {
      restartProject(selectedIndex, {
        name: projectName,
        author: { name: authorName, email: authorEmail },
      });
    }
    projectModal.close();
  };

  const handleStartRelease = (index: number) => {
    startRelease(index);
  };

  const handleDELETE = (index: number) => {
    DELETEProject(index);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: 20 }}>Release Tracker</h1>

      <div style={{
        backgroundColor: '#fff3cd',
        color: '#856404',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '10px',
        border: '1px solid #ffeeba',
        borderRadius: '4px',
        marginBottom: '15px'
      }}>
        ⚠️ Please do not merge any code before notifying the author if a release is ongoing on any project.
      </div>

      <ProjectTable
        projects={projects}
        onMarkDone={markProjectDone}
        onRestart={handleRestart}
        onStart={handleStartRelease}
        onNotify={() => {}}
        onApprove={approveRequest}
        onDELETE={handleDELETE}
        onAddProject={handleAddProject}
      />

      {projectModal.isOpen && (
        <ProjectModal
          title={selectedIndex === null ? 'Add Project' : 'Restart Project'}
          projectName={projectName}
          authorName={authorName}
          authorEmail={authorEmail}
          onChangeProjectName={setProjectName}
          onChangeAuthorName={setAuthorName}
          onChangeAuthorEmail={setAuthorEmail}
          onSubmit={handleSubmitProject}
          onClose={projectModal.close}
        />
      )}
    </div>
  );
}
