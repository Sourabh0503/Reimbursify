import { Injectable } from '@angular/core';
import { Notification, NotificationType } from '../models/Notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  getAllNotifications(): Notification[] {
    return [
      {id: '1', type: NotificationType.Info, description: 'You have a new reimbursement request', time: new Date(), isNew: true},
      {id: '2', type: NotificationType.Accept, description: 'You have a new reimbursement request', time: new Date(), isNew: false},
      {id: '3', type: NotificationType.Decline, description: 'You have a new reimbursement request', time: new Date(), isNew: true},
      {id: '4', type: NotificationType.Info, description: 'You have a new reimbursement request', time: new Date(), isNew: true},
      {id: '5', type: NotificationType.Accept, description: 'You have a new reimbursement request', time: new Date(), isNew: false},
      {id: '6', type: NotificationType.Decline, description: 'You have a new reimbursement request', time: new Date(), isNew: true},
    ];
  }
}
