import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  apiKey = '33a57ddf5cdd8f23f29b6949484a8188';

  constructor(private http: HttpClient) { }

  // getFilmListWithName(filmName: string): any{
  //   this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${filmName}`)
  //     .subscribe(
  //       (data) => {
  //       return data;
  //     },
  //     error => {console.error('The was an error', error)})
  // }
}
