import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private rickAndMortyUrl = environment.rickAndMorty;

  constructor(private http: HttpClient) {}

  public getAllCharacters() {
    return this.http.get(this.rickAndMortyUrl + '/character');
  }
}
