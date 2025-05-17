import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '@app/shared/services/character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-details',
  imports: [CommonModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit {

 character: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterSvc: CharacterService
  ) {} 

ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterSvc.getCharacterById(+id).subscribe(data => {
        this.character = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }



}
