import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from '../article-api.service';

@Component({
  selector: 'app-article-index',
  templateUrl: './article-index.component.html',
  styleUrls: ['./article-index.component.css']
})
export class ArticleIndexComponent implements OnInit {

  private data:any = [];
  constructor(private api:ArticleApiService) { 
   
    
    
  }

  ngOnInit() {
     this.api.get_articles_latest().subscribe(res => {
       console.log(res[0]);
      this.data=res;
    });
  }

}
