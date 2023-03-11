import { Injectable, NgZone } from '@angular/core';
import { IUser } from '../Interfaces/iuser';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  private isLoggedSubject: BehaviorSubject<boolean>;

  constructor(
    public router: Router,
    public angFireAuth: AngularFireAuth,
    public angFireSt: AngularFirestore,
    public ngZone: NgZone
  ) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isLoggedIn);
  }
  // Login
  logInUser(email: string, password: string) {
    return this.angFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        localStorage.setItem('user', JSON.stringify(result.user));
        this.isLoggedSubject.next(true);
        this.router.navigate(['panel']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  registerUser(email: string, password: string) {
    this.angFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['panel']);

        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user ? true : false;
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.angFireSt.doc(
      `users/${user.uid}`
    );
    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Logout
  logOutUser() {
    return this.angFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.isLoggedSubject.next(false);
      this.router.navigate(['home']);
    });
  }

  //For subscribing to the state of the auth service
  getUserLoginStatus(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }
}
