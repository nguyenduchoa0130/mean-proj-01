import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
];

@NgModule({
  declarations: [SignInComponent, SignUpComponent, ForgetPasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
