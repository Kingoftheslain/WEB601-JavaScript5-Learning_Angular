import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
  export class ContentListComponent implements OnInit {
    searchFiltered: string = '';
    searchString: string = '';
    message: string = '';
    messageColor: string = '';

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
          title:"T2",
          description:"forest reading",
          creator:"King",
          imgURL:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
          type:"Nature",
          tags: ["Nature", "Reading"]
    };
    contentItem3:Content = {
          id: 3,
          title:"T3",
          description:"winding path",
          creator:"King",
          imgURL:"https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320",
          type:"Nature",
          tags: ["Nature", "River"]
    };
    contentItem4:Content = {
          id: 4,
          title:"T4",
          description:"galactic fog",
          creator:"King",
          imgURL:"https://cdn.esawebb.org/archives/images/screen/weic2216b.jpg",
          type:"Space",
          tags: ["Space", "Cosmos"]
    };
    contentItem5:Content = {
          id: 5,
          title:"T5",
          description:"city panoramic",
          creator:"King",
          imgURL:"https://media.cntraveler.com/photos/5b2be6938b842c3b35c5d30c/4:3/pass/Toronto_getty-Images_748610951.jpg",
          type:"Cityscape",
          tags: ["City", "Panoramic"]
    };
    contentItem6:Content = {
          id: 6,
          title:"T6",
          description:"running puppy",
          creator:"King",
          imgURL:"https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
          type:"Puppy",
          tags: ["Puppy", "Cute"]
    };
    contentItem7:Content = {
      id: 7,
          title:"T7",
          description:"the cosmos",
          creator:"King",
          imgURL:"https://www.ukri.org/wp-content/uploads/2022/02/STFC-240222-SpaceGalaxyStars-GettyImages-1035676256.jpg",
          type:"Space",
          tags: ["Space", "Stars"]
    };
  
    contentArray: Content[];
    constructor(){
      this.contentArray = [this.contentItem]; 
      this.contentArray.push(this.contentItem2);
      this.contentArray.push(this.contentItem3);
      this.contentArray.push(this.contentItem4);
      this.contentArray.push(this.contentItem5);
      this.contentArray.push(this.contentItem6);
      this.contentArray.push(this.contentItem7);
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
    ngOnInit(): void {

    }
  }
