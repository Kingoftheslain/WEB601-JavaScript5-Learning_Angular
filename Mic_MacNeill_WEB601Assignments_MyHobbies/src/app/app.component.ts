import { Component, OnInit } from '@angular/core';
import { HobbyServiceService } from './services/hobby-service.service';
import { Content } from '../app/helper-files/content-interface';
import { HobbyComponent } from './hobby/hobby.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hobby: Content | undefined;

  constructor(private hobbyService: HobbyServiceService){}
  
  ngOnInit(){
    this.hobbyService.getHobbysById(5).subscribe(
      (card: Content | undefined) => {
        this.hobby = this.hobby;
        if(this.hobby) {
          this.hobby.type = "selectedHobby";
        }
      }
    );
  }
}
