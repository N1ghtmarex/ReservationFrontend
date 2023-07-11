import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLoggedIn(){
    if (localStorage.getItem('token') != null){
      return true
    }
    else return false
  }

  logout(){
    localStorage.clear()
  }
}
