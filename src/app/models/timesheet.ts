export class timesheet {
  "id": string;
  "date": string;
  "projectId": string;
  "task": string;
  "startTime": string;
  "endTime": string;
  "calHrs": string;
  "description": string;
  "userId": string;
  "managerId": string
  "isSubmittedForApproval":boolean
  "timesheetStatus":string //pending, approved, declined
  "updatedBy": string;
  "createdBy": string;
  "userName": string;
  "projectName": string;
  "comments": string;
  "approvedByManager":string
  "billable":boolean
}
