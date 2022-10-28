import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersoninfoCreateComponent } from './components/personinfo/personinfo-create/personinfo-create.component';
import { PersoninfoEditComponent } from './components/personinfo/personinfo-edit/personinfo-edit.component';
import { PersoninfoViewComponent } from './components/personinfo/personinfo-view/personinfo-view.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "personinfo-view", component: PersoninfoViewComponent },
  { path: "personinfo-create", component: PersoninfoCreateComponent },
  { path: "personinfo-edit/:id", component: PersoninfoEditComponent },
  { path: "*", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
