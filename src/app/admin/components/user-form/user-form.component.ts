import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
    @Input() buttonText = 'Crear';
    @Input() user: User = null;
    @Output() saveUser: EventEmitter<User> = new EventEmitter<User>();
    userForm = null;
    show: boolean;

    constructor(
        private router: Router
    ){}

    ngOnInit(): void {
        this.userForm = new FormGroup({
            name: new FormControl(this.user ? this.user.name : '', [Validators.required, Validators.minLength(4)]),
            email: new FormControl(this.user ? this.user.email : '', [Validators.required, Validators.minLength(4)]),
            password: new FormControl(this.user ? this.user.password : '', [Validators.required, Validators.minLength(4)])
        });
    }

    onSubmit(): void {
        this.saveUser.emit({
            ...this.userForm.value
        });
    }

    onCancel(): void {
        this.router.navigate(['/admin/users']);
    }

    onShowPassword(): void {
        this.show = !this.show;
    }
}
