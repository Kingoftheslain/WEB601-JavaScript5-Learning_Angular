import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { ContentDb } from '../helper-files/contentDb';
import { HobbyServiceService } from '../services/hobby-service.service';
import { MessageServiceService } from '../services/message-service.service';


@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  constructor(private http: HttpClient,private HobbyService: HobbyServiceService, private messageService: MessageServiceService){}

  ngOnInit(): void {
      this.getHobbys();
  }

  /* getHobbys(): void{
    this.HobbyService.getHobbys()
      .subscribe(hobbys => this.hobbys = hobbys)
  } */

     getHobbys() {
       console.log(this.http.get<Content[]>("api/content"));
       return this.http.get<Content[]>("api/content");
    } 

    searchFiltered: string = '';
    searchString: string = '';
    message: string = '';
    messageColor: string = '';
    hobbys: Content[] = [];
    selectedHobby?: Content;
    
    search() {
      const content = this.hobbys.find(c => c.title.toLowerCase().substring(0,  this.searchFiltered.length) === this.searchFiltered.toLowerCase());
      console.log(this.searchFiltered);
      if (content) {
        this.message = `Content with title "${this.searchFiltered.toLowerCase()}" found.`;
        this.messageColor = 'green';
  
      } else {
        this.message = `Content with title "${this.searchFiltered.toLowerCase()}" not found.`;
        this.messageColor = 'red';
      }
    }

    onContentCreated(content: Content) {
      /* this.contentArray.push(content); */
      this.hobbys = [...this.hobbys, content];
      console.log("success", this.hobbys);
    }

    onSelectHobby(hobby: Content){
      this.selectedHobby = hobby;
      this.messageService.add(`HobbyComponent: Selected Hobby id=${hobby.id}`)
    }
    
    
  }
