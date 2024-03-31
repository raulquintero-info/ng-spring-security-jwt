import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { normalGuard } from './services/normal.guard';
import { NotAutorizedComponent } from './pages/not-autorized/not-autorized.component';
import { adminGuard } from './services/admin.guard';
import { ListadoComponent } from './pages/celulares/listado/listado.component';
import { FormaComponent } from './pages/celulares/forma/forma.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user/dashboard', component: UserDashboardComponent, canActivate:[normalGuard]},
  { path: 'admin/dashboard', component: DashboardComponent, canActivate:[adminGuard]},

  {path: 'listado', component: ListadoComponent},
  {path: 'forma', component: FormaComponent},
  {path: 'not-authorized', component: NotAutorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
