import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HobbyService } from '../hobby-service.service'

@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
  export class ContentListComponent implements OnInit {
    constructor(private HobbyService: HobbyService){}

    ngOnInit(): void {
        this.contentArray = this.HobbyService.getContent();
    }


    searchFiltered: string = '';
    searchString: string = '';
    message: string = '';
    messageColor: string = '';

    getContent(): ContentDb[]{
      
    }

    
    search() {
      const content = this.contentArray.find(c => c.title.toLowerCase().substring(0,  this.searchFiltered.length) === this.searchFiltered.toLowerCase());
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
      this.contentArray = [...this.contentArray, content];
      console.log("success", this.contentArray);
    }
    
    
  }
