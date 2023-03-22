import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HobbyServiceService } from '../services/hobby-service.service';


@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  constructor(private HobbyService: HobbyServiceService){}

  ngOnInit(): void {
      this.getHobbys();
  }

  getHobbys(): void{
    this.HobbyService.getHobbys()
      .subscribe(hobbys => this.hobbys = hobbys)
  }

    searchFiltered: string = '';
    searchString: string = '';
    message: string = '';
    messageColor: string = '';
    hobbys: Content[] = [];
    
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
    
    
  }
