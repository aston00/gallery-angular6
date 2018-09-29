import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

    getVideo(section, items, page) {
        return this.http.get(`https://api.pexels.com/videos/search?query=${section}&per_page=${items}&page=${page}`, httpOptions)
    }
}
