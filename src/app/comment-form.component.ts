import { Component } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment-form',
  template: `
  <div class="row">
    <form>
      <div class="input-group">
        <span class="glyphicon glyphicon-user input-group-addon" aria-hidden="true"></span>
        <input type="text" [(ngModel)]="comment.author" class="form-control" id="author" name="author" #author required>
      </div>
      <br>
      <textarea class="form-control" [(ngModel)]="comment.post" id="post" name="post" rows="4"></textarea>
      <br>
      <button type="submit" (click)="add()" class="btn btn-success">Add</button><br>
    </form>
  </div>`,

})
export class CommentFormComponent {

  comment: Comment = new Comment();

  constructor( private commentService: CommentService) { }

  add(): void {
    this.commentService.createComment(this.comment);
    this.comment = new Comment();
  }

}
