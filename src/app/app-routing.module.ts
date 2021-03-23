import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'document-list', component: DocumentListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  providers: [AuthGuard],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
