import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    private currentUser: Observable<User>;

    constructor() {
        this.currentUserSubject = new BehaviorSubject(
            JSON.parse(sessionStorage.getItem('currentUser'))
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    save(user): void {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    logout(): Observable<{}> {
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);

        return of({});
    }
}
