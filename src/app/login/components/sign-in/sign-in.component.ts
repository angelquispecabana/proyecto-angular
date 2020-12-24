import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error = '';
  model = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    const { email, password } = this.model;
    this.loginService.login(email, password)
      .subscribe((response) => {
        if (response){
          this.router.navigate(['/admin']);
        }
        else {
          this.error = 'El usuario y/o contraseña son incorrectos';
        }
      });
  }

}
