import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss']
})
export class NotificationButtonComponent implements OnInit {

  @Input('notificationCount') notificationCount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
