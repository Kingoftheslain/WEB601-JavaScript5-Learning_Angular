import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
}) 
export class HobbyComponent implements OnInit {
  @Input() content : Content; 

  constructor(){
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
