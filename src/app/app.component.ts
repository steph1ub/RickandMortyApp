import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { CharacterListComponent } from './components/pages/characters/character-list/character-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-final';
}
