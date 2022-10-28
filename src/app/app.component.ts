import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pwa-cinema';

  filmName='';
  apiKey = '33a57ddf5cdd8f23f29b6949484a8188';
  filmList: any[] = [];

  //https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=33a57ddf5cdd8f23f29b6949484a8188&language=en-US

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log(this.filmName);
  }

  searchFilm(){
    console.log(this.filmName);
    this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.filmName}`).subscribe(data => {
      this.filmList = data.results;
      console.log(this.filmList);
    })
  }
}
