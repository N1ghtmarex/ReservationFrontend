import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewProfile } from 'src/app/models/registrationDto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup

  newUser = new NewProfile();

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null),
      phone: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  registerAsCoach(newUser: NewProfile) {
    this.auth.registerAsCoach(newUser).subscribe(() => {
    });
  }

  registerAsClient(newUser: NewProfile) {
    this.auth.registerAsClient(newUser).subscribe(() => {
    });
  }
  
}
