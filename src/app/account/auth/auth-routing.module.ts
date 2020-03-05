import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //     path: 'login',
  //     component: LoginComponent
  // },
  // {
  //     path: 'signup',
  //     component: SignupComponent
  // },
  // {
  //     path: 'confirm',
  //     component: ConfirmComponent
  // },
  // {
  //     path: 'reset-password',
  //     component: PasswordresetComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
