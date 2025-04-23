import { useState } from "react";
import { Project } from "../types/Project";

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project]);
  };

  const markProjectDone = (index: number) => {
    const updated = [...projects];
    updated[index].status = "Active";
    updated[index].endTime = new Date();
    setProjects(updated);
  };

  const restartProject = (index: number, project: Partial<Project>) => {
    const updated = [...projects];
    updated[index] = {
      ...updated[index],
      ...project,
      status: "releasing",
      startTime: new Date(),
      endTime: null,
      requests: []
    };
    setProjects(updated);
  };

  const startRelease = (index: number) => {
    const updated = [...projects];
    updated[index].status = "releasing";
    updated[index].startTime = new Date();
    updated[index].endTime = null;
    setProjects(updated);
  };

  const requestMerge = (index: number, name: string, ticket: string) => {
    const updated = [...projects];
    updated[index].requests.push({
      name,
      ticket,
      time: new Date(),
      status: "pending"
    });
    setProjects(updated);
  };

  const approveRequest = (projectIndex: number, reqIndex: number) => {
    const updated = [...projects];
    updated[projectIndex].requests[reqIndex].status = "approved";
    setProjects(updated);
  };

  const sendNotification = (
    index: number,
    email: string,
    releaseNotesUrl: string,
    note: string
  ) => {
    const updated = [...projects];
    updated[index].notifyEmail = email;
    updated[index].releaseNotesUrl = releaseNotesUrl;
    updated[index].notifyNote = note;
    updated[index].notified = true;
    setProjects(updated);
  };

  const DELETEProject = (index: number) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  return {
    projects,
    addProject,
    markProjectDone,
    restartProject,
    startRelease,
    requestMerge,
    approveRequest,
    sendNotification,
    DELETEProject,
    setProjects
  };
}
