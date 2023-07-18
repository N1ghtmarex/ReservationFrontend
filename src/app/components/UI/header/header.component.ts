import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  role!: any
  name!: any
  surname!: any
  patronymic!: any

  constructor(private auth: AuthService) {
    
  }

  ngOnInit(): void {
    

    if (localStorage.getItem('role') == 'клиент') {
      this.auth.getClientData().subscribe((any => {
        localStorage.setItem('name', any.name)
        localStorage.setItem('surname', any.name)
        localStorage.setItem('patronymic', any.name)

        this.name = localStorage.getItem('name')
        this.surname = localStorage.getItem('surname')
        this.patronymic = localStorage.getItem('patronymic')
        this.role = localStorage.getItem('role')
      }));
    }
    else {
      this.auth.getCoachData().subscribe((any => {
        localStorage.setItem('name', any.name)
        localStorage.setItem('surname', any.name)
        localStorage.setItem('patronymic', any.name)

        this.name = localStorage.getItem('name')
        this.surname = localStorage.getItem('surname')
        this.patronymic = localStorage.getItem('patronymic')
        this.role = localStorage.getItem('role')
      }));
    }
    
    
  }

  isLoggedIn(){
    if (localStorage.getItem('token') != null){
      return true
    }
    else return false
  }

  logout(){
    localStorage.clear()
    this.name = ''
    this.surname = ''
    this.patronymic = ''
    this.role = ''
  }
}
