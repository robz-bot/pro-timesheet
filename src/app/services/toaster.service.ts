import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastrService: ToastrService) {}

  public showSuccess(title: string, message: string): void {
    this.toastrService.success(title, message);
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(title: string, message: string): void {
    this.toastrService.error(message, title);
  }

  public showRequiredError(title: string, message: string): void {
    this.toastrService.error(message + ' is required!', title);
  }
  public showInvalidError(title: string, message: string): void {
    this.toastrService.error(message + ' is invalid!', title);
  }
}
