import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './Guards/auth.guard';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'panel',
        loadChildren: () =>
          import('src/app/Modules/panel/panel.module').then(
            (m) => m.PanelModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
