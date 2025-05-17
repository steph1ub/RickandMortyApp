import { Component } from '@angular/core';
import { CharacterListComponent } from '../characters/character-list/character-list.component';
import { CharactersModule } from '../characters/characters.module';

@Component({
  selector: 'app-home',
  imports: [CharacterListComponent, CharactersModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
