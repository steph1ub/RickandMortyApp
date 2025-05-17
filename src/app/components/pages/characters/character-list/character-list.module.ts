import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterDetailsRoutingModule } from '../character-details/character-details-routing.module';
import { LayoutComponent } from '@app/layout/layout.component';
import { HeaderComponent } from '@app/layout/header/header.component';
import { FooterComponent } from '@app/layout/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    RouterLink,
    CharacterDetailsRoutingModule,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CharacterListModule { }
