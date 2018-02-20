import {Injectable} from '@angular/core';
import {User} from './user.interface';


@Injectable()
export class UserService{
  user: User[] = [
    {name:'eqw234e', email: '2156453@qq.com', password: 'q3eq4543we2', logupTime: '2018-01-20'},
    {name:'eq435we', email: '21343@qq.com', password: 'q3eqw45e2', logupTime: '2018-01-20'},
    {name:'eq5765we', email: '213@qq.com', password: 'q3eq5435we2', logupTime: '2018-01-20'},
    {name:'eq3452we', email: '2114543@qq.com', password: 'q3533eqwe2', logupTime: '2018-01-20'},
    {name:'eq123we', email: '21133@qq.com', password: 'q3eq354we2', logupTime: '2018-01-20'},
    {name:'eq1213we', email: '245413@qq.com', password: 'q334534eqwe2', logupTime: '2018-01-20'},
    {name:'eqewrwe', email: '2333213@qq.com', password: 'q3e35435qwe2', logupTime: '2018-01-20'},
    {name:'eq134we', email: '21453@qq.com', password: 'q3eq34534we2', logupTime: '2018-01-20'}
  ];
  deleteUser(user: string):void {
  }
  addUser(user: string): void {

  }
}
