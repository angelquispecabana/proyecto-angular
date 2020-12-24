import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {
    userId: number;
    user: User = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            this.userId = parseInt(paramMap.get('id'), 10);
            this.userService.getUserById(this.userId)
              .subscribe(user => {
                this.user = user;
              });
        });
    }

    onSubmit(user: User): void {
        this.userService.updateUser({...user, id: this.userId})
            .subscribe(() => {
            this.router.navigate(['/admin/users']);
        });
    }
}
