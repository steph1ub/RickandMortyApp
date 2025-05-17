import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../Interface/character.interface';
import { environment } from '@environment/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

   private base_url = 'https://rickandmortyapi.com/api/character';
  

  constructor(private http: HttpClient) { }

 searchCharacters(query = '', page = 1) {
   const filter=  `${this.base_url}/?name=${query}&page=${page}`
    return this.http.get<Character[]>(filter);
   
  }

   getDetails(id: number) {
    return this.http.get<Character>(`${this.base_url}/${id}`)

  }




  getCharacters(name: string = ''): Observable<any> {

const url = name
 ? `${this.base_url}/?name=${encodeURIComponent(name)}`
    : this.base_url;

    return this.http.get<any>(url);
  }


getCharacterById(id: number): Observable<any> {
  return this.http.get<any>(`${this.base_url}/${id}`);
}



}
