import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: 'repositories', component: RepositoriesComponent},
  {path: '', component: ProfileComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
