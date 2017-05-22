import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment';
@Component({
  selector: 'app-comment-list',
  template: `
  <div class="row" *ngFor = "let comment of comments">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">{{ comment.author }}</h3>
      </div>
      <div class="panel-body">
        {{ comment.post }}
      </div>
    </div>
  </div>`,
})
export class CommentListComponent implements OnInit {

  comments: Comment[] = [ { author: 'Google', post: 'Welcome to Angular'}];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.commentCreated$.subscribe((comment: Comment) => this.comments.unshift(comment));
  }

}
