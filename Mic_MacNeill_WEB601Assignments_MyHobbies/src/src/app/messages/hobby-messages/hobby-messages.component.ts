import { Component } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-hobby-messages',
  templateUrl: './hobby-messages.component.html',
  styleUrls: ['./hobby-messages.component.scss']
})
export class HobbyMessagesComponent {

  constructor(public messageService: MessageServiceService){}
}
