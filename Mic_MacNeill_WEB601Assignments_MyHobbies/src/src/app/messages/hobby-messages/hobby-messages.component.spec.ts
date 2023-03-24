import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyMessagesComponent } from './hobby-messages.component';

describe('HobbyMessagesComponent', () => {
  let component: HobbyMessagesComponent;
  let fixture: ComponentFixture<HobbyMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbyMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
