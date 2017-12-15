import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers(){
    return this.users;
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  getUserById(userId: string){
    return this.database.object('users/' + userId);
  }

  updateUser(localUpdatedUser){
    var userEntryFirebase = this.getUserById(localUpdatedUser.$key);
    userEntryFirebase.update({name: localUpdatedUser.name,
                                age: localUpdatedUser.age,
                                genre: localUpdatedUser.genre,
                                description: localUpdatedUser.description});
  }

  deleteUser(localDeletedUser){
    var userEntryFirebase = this.getUserById(localDeletedUser.$key);
    userEntryFirebase.remove();
  }

}
