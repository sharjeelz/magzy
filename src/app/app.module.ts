import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { ArticleApiService } from './article-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticleIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ArticleApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
