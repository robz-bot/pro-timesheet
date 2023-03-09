export class TimesheetSave {
  "id": string;
  "date": string;
  "projectId": string;
  "taskId": string;
  "startTime": string;
  "endTime": string;
  "calHrs": string;
  "desc": string;
  "isSubmittedForApproval":boolean
  "timesheetStatus":string //Bending, approved, declined
}
