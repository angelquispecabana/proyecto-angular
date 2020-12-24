import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
  })
export class UsersComponent implements OnInit, OnDestroy{
    users: User[] = [];
    subcription: Subscription = null;

    constructor(
        private userService: UserService
    ){}

    ngOnInit(): void {
      this.subcription = this.userService.getUsers()
        .subscribe((users) => {
          this.users = users;
        }, (err) => {
          console.log('error >', err);
        });
    }

    ngOnDestroy(): void {
      this.subcription.unsubscribe();
    }

    handleDelete(id: number): void {
      this.userService.deleteUser(id)
        .subscribe(() => {
          this.users = this.users.filter(product => product.id !== id);
        }, (err) => {
          console.log('error >', err);
        });
    }
}
