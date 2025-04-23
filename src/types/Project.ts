export interface MergeRequest {
  name: string;
  ticket: string;
  time: Date;
  status: "pending" | "approved";
}

export interface Project {
  name: string;
  status: "Active" | "releasing";
  startTime: Date | null;
  endTime: Date | null;
  author: {
    name: string;
    email: string;
  } | null;
  requests: MergeRequest[];
  notifyEmail?: string;
  notifyNote?: string;
  releaseNotesUrl?: string;
  notified?: boolean;
}
