import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/Notification.model';

@Component({
  selector: 'app-notifications',
  standalone: false,
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  isNotification:boolean = true;
  notifications: Notification[] = [];

  constructor(private readonly notificationService: NotificationService) {
    this.notifications = this.notificationService.getAllNotifications();
  }

  toggleType(event: MouseEvent,isNotification: boolean) {
    event.stopPropagation();
    this.isNotification = isNotification;
  }
}
