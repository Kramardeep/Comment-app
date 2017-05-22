import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Comment } from './comment';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CommentService {

  // Observable comment sources
  private commentCreatedSource = new Subject<Comment>();

  // Observable string streams
  commentCreated$ = this.commentCreatedSource.asObservable();

  // Service message commands
  createComment(comment: Comment) {
    this.commentCreatedSource.next(comment);
  }
}
