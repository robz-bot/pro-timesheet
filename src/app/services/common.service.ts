import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {

  }

  userId:any = sessionStorage.getItem('userId');;
  getUserId(): boolean {
    console.log("userId: "+this.userId)
    return this.userId == null || this.userId == '' || this.userId == undefined
      ? false
      : true;
  }

  loggedInUserId(): number {
    return this.userId;
  }
}
