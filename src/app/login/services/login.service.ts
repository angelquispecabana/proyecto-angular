import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';

@Injectable()
export class LoginService {
    private readonly API = 'http://localhost:5000';

    constructor(
        private http: HttpClient,
        private authService: AuthService
      ) {}

    private getUserByEmail(email: string): Observable<any>{
        return this.http.get(`${this.API}/users?email=${email}`);
    }

    login(email, password): Observable<any>{
        return this.getUserByEmail(email)
            .pipe(
                map((users) => {
                    const [ user ] = users;
                    if (user){
                        if (user.password === password){
                            this.authService.save(user);
                            return true;
                        }
                    }
                    return false;
                })
            );
    }
}
