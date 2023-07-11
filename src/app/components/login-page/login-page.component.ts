import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup

  user = new User();

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required])
    })
  }

  loginAsCoach(user: User) {
    this.auth.loginAsCoach(user).subscribe((token: string) => {
      localStorage.setItem('token', token);
    });
  }

  loginAsClient(user: User) {
    this.auth.loginAsClient(user).subscribe((token: string) => {
      localStorage.setItem('token', token);
    });
  }

}
