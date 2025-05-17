import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { CharacterListComponent } from './character-list.component';
import { LayoutComponent } from '@app/layout/layout.component';


const routes: Routes = [

  {
    path: '/home',
    component: LayoutComponent,
    children: [
      {path:'', component: CharacterListComponent},
{path:'character/:id', component: CharacterDetailsComponent}
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterListRoutingModule { }
