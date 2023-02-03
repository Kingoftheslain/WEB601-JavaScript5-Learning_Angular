import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
  export class ContentListComponent implements OnInit {
    @Input() content: Content;
    constructor() {
      this.content = {
        id: 1,
        title:"T1",
        description:"testing grounds",
        creator:"King",
        imgURL:"https://www.educationcorner.com/images/featured-improve-test-taking.jpg",
        type:"Test",
        tags: ["Test", "Testing"]
      };
    }
  
    ngOnInit(): void {
    
  
    }
    imageText() {
      console.log("image url: " + this.content.imgURL + "Image Title:" + this.content.title);
    }
  }
