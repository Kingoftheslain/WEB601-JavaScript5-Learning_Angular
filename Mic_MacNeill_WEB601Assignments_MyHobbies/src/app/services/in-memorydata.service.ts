import { ContentChild, Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentDb } from '../helper-files/contentDb';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemorydataService implements InMemoryDbService{

  constructor(private http: HttpHeaders) { }

  createDb() {
  const content : Content[] = ContentDb;
  return {content}
  }

  genid(content: Content[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id)) + 1 : 2000;
  }
}
