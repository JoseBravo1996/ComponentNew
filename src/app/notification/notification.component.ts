import { Component, OnInit } from '@angular/core';
import { NotificationModel } from './models/notification.model';

import { NotificationService } from './services/notification.service';

@Component({
  selector: 'aso-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications = new Array<NotificationModel>();

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    // this.notificationService.notifica.subscribe((notificacion) =>{
    //   this.notifications.push(notificacion);
    // });

    this.notifications = [
      { usuario: "Jose Bravo", tipo: 1, mensaje: "Actualización de recupero", fecha: new Date().toString(), link: "www.google.com" },
      { usuario: "Jose Bravo", tipo: 1, mensaje: "Actualización de recupero", fecha: new Date().toString(), link: "www.google.com" },
      { usuario: "Jose Bravo", tipo: 1, mensaje: "Actualización de recupero", fecha: new Date().toString(), link: "www.google.com" },
    ]
    // llamada al servicio
  }

}
