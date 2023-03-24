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

  async getHobbys():  Promise<Observable<Content[]>> {
    const hobbys = of(ContentDb); // Creating an Observable of the mock Hobbies
    this.messageService.add('HobbyService: Content Array Loaded!'); // Adding a message to the MessageService
    return of(ContentDb); // Returning the Observable of the mock Hobbies
  }

  getHobbysById(id: number): Observable<Content | undefined> {
    const hobby = ContentDb.find(h => h.id === id);
    
    if (hobby){
      console.log(hobby);
      this.messageService.add("Your message has loaded Successfully!" + " Id number is: " + id);
    }
    else {
      this.messageService.add("Your message couldn't load, Sorry!");
    }
    return of(hobby);
  }
}
