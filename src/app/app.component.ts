import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Comment';
  totalComment = 1;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.commentCreated$.subscribe(() => this.totalComment++);
  }
}
