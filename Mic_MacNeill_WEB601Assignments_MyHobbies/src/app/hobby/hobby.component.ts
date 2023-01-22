import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {
  myHobby:Content = {
    id:1,
    title:"Gaming",
    description:"I enjoy playing Games from Genres such as JRPGs, MMOs, FPS, Open World and Survival Games",
    creator:"Michael",
    type:"hobby"
  }

  myHobby2:Content = {
    id:2,
    title:"Reading",
    description:"I enjoy Reading in my downtime, Currently I am reading the Wheel of Time Series",
    creator:"Michael",
    type:"hobby"
  }

  myHobby3:Content = {
    id:3,
    title:"Building PC's",
    description:"I enjoy helping people put together PCs, as for me it feels like putting together a complex puzzle",
    creator:"Michael",
    type:"hobby"
  }

  myHobbies = new ContentList(this.myHobby)
  myHobbyList = this.myHobbies.getHobby();

  constructor(){
    this.myHobbies.addItem(this.myHobby);
    this.myHobbies.addItem(this.myHobby2);
    this.myHobbies.addItem(this.myHobby3);
  }
  
  
  ngOnInit(): void {
    const x = document.getElementById('hobbyList');
    console.log(x);
    if(x) {
      x.innerHTML += this.myHobbies.printContentByIndex(0);
      x.innerHTML += this.myHobbies.printContentByIndex(1);
      x.innerHTML += this.myHobbies.printContentByIndex(2);
  }
  }

}
