import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { ForbbidenComponent } from './forbbiden/forbbiden.component';
import { RouterModule, Routes } from '@angular/router';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';

const routes: Routes = [
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: 'unauthorize',
    component: UnauthorizeComponent,
  },
  {
    path: 'forbbiden',
    component: ForbbidenComponent,
  },
  {
    path: 'internal-server-error',
    component: InternalServerErrorComponent,
  },
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    UnauthorizeComponent,
    ForbbidenComponent,
    InternalServerErrorComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ErrorsModule {}
