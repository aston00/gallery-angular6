import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': '563492ad6f91700001000001fb71d6f2de58412f8a9872bbe46f1273'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  sections: string[] = ['nature',
    'people',
    'women',
    'black',
    'rain',
    'forest',
    'nature',
    'suits',
    'love'
  ];


  constructor(private http: HttpClient) { }

  getCategories(){
    return this.sections;
  };

  getImagesBySection(section){
    return this.http.get(`https://api.pexels.com/v1/search?query=${section}&per_page=15&page=1`, httpOptions)
  };
};
