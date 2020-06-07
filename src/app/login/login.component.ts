import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  newTaskForm: FormGroup;
  user= { userEmail: 'sample@email.com', userPassword: 'allowme' }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newTaskForm = new FormGroup({
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'userPassword': new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
  });
}

  createNewTask() {
    if(this.newTaskForm.value) {
      let {userEmail, userPassword} = this.newTaskForm.value;

      if (userEmail === this.user.userEmail && userPassword === this.user.userPassword) {
        localStorage.setItem('auth', 'true');
        this.router.navigate(['/dashboard']);
      } else {
        alert('invalid credentials')
      }
    }
  }

}
