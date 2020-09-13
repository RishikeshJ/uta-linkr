import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
export class SearchService {
    readonly baseUrl = 'http://localhost:4000/searchlinkr/';

    constructor(private http: HttpClient) { }

    getlist(query: string) {
        console.log('check');
        console.log(query);
        return this.http.get(this.baseUrl + '/' + query );
    }
}

