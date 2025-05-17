import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharactersModule } from '../characters/characters.module';
import { CharacterListComponent } from '../characters/character-list/character-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule,
    HomeComponent,
    CharacterListComponent
  ]
})
export class HomeModule { }
