import {Injectable} from '@angular/core';
import { Comment} from './comment.interface';

@Injectable()
export class CommentService{
  comment: Comment[] = [
    {from: 'a231sd', to: 's343ad', content: 'dasda', time: '2018-01-01'},
    {from: 'a332sd', to: 'sa23d', content: 'dasda', time: '2018-11-01'},
    {from: 'asder', to: 'sa234d', content: 'dasda', time: '2018-02-01'},
    {from: 'a123sd', to: 'sad', content: 'dasda', time: '2018-03-01'},
    {from: '3wasd', to: '343esad', content: 'dasda', time: '2018-12-01'},
    {from: 'as23d', to: 'edf', content: 'dasda', time: '2018-04-01'},
    {from: '23asd', to: '343sad', content: 'dasda', time: '2018-11-01'},
    {from: '43asd', to: 'rfefsad', content: 'dasda', time: '2018-06-01'}
    ];
  deleteComment(comment: string):void {
  }
  addComment(comment: string): void {

  }
}
