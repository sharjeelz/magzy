import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {

  constructor(private api:HttpClient) {}
  private apiURL = 'http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json';
  get_articles_latest(){
    return this.api.get(this.apiURL);
  }
}
