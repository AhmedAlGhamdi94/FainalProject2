import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


 registerForm: FormGroup;
 nameInput: FormControl;
 emailInput: FormControl;
 passwordInput: FormControl;

 constructor(
  private frombuilder:FormBuilder,
  private router: Router,
  private authService: AuthService,
  private user: User
 ) {
  this.nameInput = new FormControl('', [Validators.required]);
  this.emailInput = new FormControl('', [Validators.required, Validators.email]);
  this.passwordInput = new FormControl('', [Validators.required]);
  this.registerForm = new FormGroup({
   name: this.nameInput,
   email: this.emailInput,
   password: this.passwordInput,
  });
 }

 ngOnInit(): void {
 }

 signup() {
  this.authService.register(this.user).subscribe({
   next: (users) => {
    alert('Register successful');
    console.log(users);

    // Redirect to login page
    this.router.navigate(['/login']);
   },
   error: (error: any) => {
    alert('Register failed');
    console.log(error);
   }
  });
 }

}
