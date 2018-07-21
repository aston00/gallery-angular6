import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': '563492ad6f91700001000001fb71d6f2de58412f8a9872bbe46f1273'
  })
};
@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }

  
  getImages() {
    return this.http.get('https://api.pexels.com/v1/search?query=people&per_page=15&page=1', httpOptions)
  };
}
