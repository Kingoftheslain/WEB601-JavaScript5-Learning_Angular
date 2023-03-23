import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { ContentDb } from '../helper-files/contentDb';
import { MessageServiceService } from './message-service.service'; 

@Injectable({
  providedIn: 'root'
})
export class HobbyServiceService {

  constructor(private messageService: MessageServiceService) { }

  getHobbys(): Observable<Content[]> {
    const hobbys = of(ContentDb); // Creating an Observable of the mock Hobbies
    this.messageService.add('HobbyService: Content Array Loaded! '); // Adding a message to the MessageService
    return of(ContentDb); // Returning the Observable of the mock Hobbies
  }

  getHobbysById(id: number): Observable<Content | undefined> {
    const hobby = ContentDb.find(h => h.id === id);
    if (hobby){
      
    }
    else {
      
    }
    return of(hobby);
  }
}
