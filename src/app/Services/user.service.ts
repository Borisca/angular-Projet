import {User} from '../models/user.models';
import {Subject} from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james.smith.com',
      drinkPreference: 'coca',
      hobbies: [
        'coder',
        'degustation de cafe'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
