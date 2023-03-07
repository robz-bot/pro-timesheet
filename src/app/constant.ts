export class TIMESHEET_INFO {
  public static TIMESHEET_CURRENT =
    'Fill out your date-wise timesheet here and submit it for approval.';
  public static TIMESHEET_WAIT =
    'View your date-wise records and it is waiting for approval';
}

export class TIME_METHODS {
  public static getDataDiff(startDate: any, endDate: any) {
    var diff = endDate.getTime() - startDate.getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;
    var minutes =
      Math.floor(diff / (60 * 1000)) - (days * 24 * 60 + hours * 60);
    var seconds =
      Math.floor(diff / 1000) -
      (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);
    return { day: days, hour: hours, minute: minutes, second: seconds };
  }
}

export class FORMAT {
  public static format_date(
    year: any,
    month: any,
    day: any
  ) {
    return year + '-' + month + '-' + day;
  }
  public static format_time(
    time_hr: any,
    time_min: any
  ) {
    return  time_hr + ':' + time_min;
  }
  public static format_date_time(
    year: any,
    month: any,
    day: any,
    time_hr: any,
    time_min: any
  ) {
    return year + '-' + month + '-' + day + ' ' + time_hr + ':' + time_min;
  }
}
