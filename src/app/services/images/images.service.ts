import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({
        'Authorization': '563492ad6f91700001000001fb71d6f2de58412f8a9872bbe46f1273'
    })
};
@Injectable({
    providedIn: 'root'
})
export class ImagesService {

    constructor(private http: HttpClient) { }

    getSections(): Observable<Object> {
        return this.http.get('http://localhost:8000/sections');
    }

    getImagesBySection(section: string, items: string | number, page: string | number): Observable<Object> {
        return this.http.get(`https://api.pexels.com/v1/search?query=${section}&per_page=${items}&page=${page}`, httpOptions)
    }
}
