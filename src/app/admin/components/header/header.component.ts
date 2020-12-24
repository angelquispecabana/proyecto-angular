import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { strict } from 'assert';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  irProducts(): void {
    this.router.navigate(['/admin']);
  }

  irUsers(): void {
    this.router.navigate(['/admin/users']);
  }
}
