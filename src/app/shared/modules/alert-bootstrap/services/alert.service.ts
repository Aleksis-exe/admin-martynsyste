import { Injectable } from '@angular/core';
import { IAlert, TypeAlert } from '../interface/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  add(alert: IAlert): void {
    var alertPlaceholder = document.getElementById('box-alerts');
    if (alertPlaceholder)
      this.addAlert(alert.message, alert.type, alertPlaceholder);
  }
  private addAlert(
    message: string,
    type: TypeAlert,
    alertPlaceholder: HTMLElement
  ) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML =
      '<div class="alert alert-' +
      type +
      ' alert-dismissible" role="alert">' +
      message +
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    alertPlaceholder.append(wrapper);
  }
}
