import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// when we add the Injectable directive the UserService becomes available in the whole app without us needing to add it to the providers array in app.module.ts
@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(private http: HttpClient) {}

    getUsers() {
        // return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
    }
}