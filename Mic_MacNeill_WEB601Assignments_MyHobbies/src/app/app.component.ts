import { Component } from '@angular/core';
import { Content } from '../app/helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  contentItem:Content = {
    id: 1,
        title:"T1",
        description:"testing grounds",
        creator:"King",
        imgURL:"https://www.educationcorner.com/images/featured-improve-test-taking.jpg",
        type:"Test",
        tags: ["Test", "Testing"]
  };
  contentItem2:Content = {
    id: 2,
        title:"T1",
        description:"testing grounds",
        creator:"King",
        imgURL:"https://www.educationcorner.com/images/featured-improve-test-taking.jpg",
        type:"Test",
        tags: ["Test", "Testing"]
  };
  contentItem3:Content = {
    id: 3,
        title:"T1",
        description:"testing grounds",
        creator:"King",
        imgURL:"https://www.educationcorner.com/images/featured-improve-test-taking.jpg",
        type:"Test",
        tags: ["Test", "Testing"]
  };
  contentItem4:Content = {
    id: 4,
        title:"T1",
        description:"testing grounds",
        creator:"King",
        imgURL:"https://www.educationcorner.com/images/featured-improve-test-taking.jpg",
        type:"Test",
        tags: ["Test", "Testing"]
  };
  contentItem5:Content = {
    id: 5,
        title:"T1",
        description:"testing grounds",
        creator:"King",
        imgURL:"https://www.educationcorner.com/images/featured-improve-test-taking.jpg",
        type:"Test",
        tags: ["Test", "Testing"]
  };
  contentItem6:Content = {
    id: 6,
        title:"T1",
        description:"testing grounds",
        creator:"King",
        imgURL:"https://www.educationcorner.com/images/featured-improve-test-taking.jpg",
        type:"Test",
        tags: ["Test", "Testing"]
  };

  contentArray: Content[];
  constructor(){
    this.contentArray = [this.contentItem];
   /*  this.contentArray.push(this.contentItem); */
    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
    this.contentArray.push(this.contentItem6);
  }

}