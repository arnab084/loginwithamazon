import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SuccessComponent} from './success/success.component';
import {FailComponent} from './fail/fail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'failure', component: FailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
