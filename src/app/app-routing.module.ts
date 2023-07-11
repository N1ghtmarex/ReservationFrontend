import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component'
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'auth', component: LoginPageComponent},
  {path: '**', redirectTo: '', component: BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
