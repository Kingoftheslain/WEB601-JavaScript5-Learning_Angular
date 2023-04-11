import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentDb } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemorydataService implements InMemoryDbService{
  createDb() {
  const content : Content[] = ContentDb;
  console.log(content)
  return {content}
  }

  genid(content: Content[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id)) + 1 : 2000;
  }
}
