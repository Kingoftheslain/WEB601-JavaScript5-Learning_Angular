import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import {ContentDb} from './helper-files/contentDb'
@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor() { }

  getContent(): Content[] {
    return ContentDb;
  }
}
