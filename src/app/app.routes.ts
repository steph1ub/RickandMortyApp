import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CharacterListComponent } from './components/pages/characters/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/pages/characters/character-details/character-details.component';

import { FormSearchComponent } from './shared/components/form-search/form-search.component';


export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'character-list', component: CharacterListComponent},
    {path:'character/:id', component:CharacterDetailsComponent},
    
    {path:'form-search', component:FormSearchComponent}

];
