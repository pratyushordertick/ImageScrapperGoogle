import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectedHistoryComponent } from './components/selected-history/selected-history.component';

const routes: Routes = [

{
  path: '',

  component: HomeComponent
},
{
  path: 'history',

  component: HistoryComponent
},
{
  path: 'selected',

  component: SelectedHistoryComponent
},
{
  path: '**',

  component: HomeComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
