import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommentFormComponent } from './comment-form.component';
import { CommentListComponent } from './comment-list.component';
import { AppComponent } from './app.component';

import { CommentService } from './comment.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CommentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
