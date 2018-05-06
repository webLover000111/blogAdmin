import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service'
@Component({
  selector: 'app-docomment',
  templateUrl: './docomment.component.html',
  styleUrls: ['./docomment.component.css'],
  providers: [CommentService]
})
export class DocommentComponent implements OnInit {
  comments = this.commentsService.comment;
  constructor(private commentsService: CommentService) { }

  ngOnInit() {
  }

}
