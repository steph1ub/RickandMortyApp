import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/shared/services/character.service';
import { Character } from '@app/shared/Interface/character.interface';
import { take } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { CharacterDetailsRoutingModule } from '../character-details/character-details-routing.module';

type RequestInfo = {
next: string | null;
};


@Component({
  selector: 'app-character-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})


export class CharacterListComponent implements OnInit{
characters: Character[] = [];
searchTerm: string='';
error: string='';


  info: RequestInfo = {
    next:null,
  };




constructor (private characterSvc: CharacterService){}

  ngOnInit(): void {
   // this.getDataFromService();

this.searchCharacters();
     // this.characterSvc.getCharacters().subscribe(response => {
     // this.characters = response.results;
   //});
  }

  searchCharacters(): void {
    this.characterSvc.getCharacters(this.searchTerm).subscribe({
      next: (response) => {
        this.characters = response.results;
        this.error = '';
      },
      error: (err) => {
        this.characters = [];
        this.error = 'No characters found.';
      }
    });
  }


}









